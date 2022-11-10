let nextFiberReconcileWork = null; // 当前处理到的fiber
let wipRoot = null; // 根节点

function workLoop(deadline) {
  let shouldYield = false;
  while (nextFiberReconcileWork && !shouldYield) {
    // reconcile
    nextFiberReconcileWork = performNextWork(nextFiberReconcileWork);
    console.log(nextFiberReconcileWork, "nextFiberReconcileWork");
    shouldYield = deadline.timeRemaining() < 1;
  }
  if (!nextFiberReconcileWork && wipRoot) {
    commitRoot(); // commit
  }
  requestIdleCallback(workLoop);
}
function init() {
  requestIdleCallback(workLoop);
}

// reconcile当前的fiber
// 按照顺序处理child/sibling
function performNextWork(fiber) {
  reconcile(fiber);
  if (fiber.child) {
    return fiber.child;
  }
  // 不断调度
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.return;
  }
  console.log(nextFiber, "nextFiber");
}

// reconcile 是 vdom 转 fiber
// 一个是提前创建对应的 dom 节点
// diff，确定是增、删还是改
function reconcile(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  reconcileChildren(fiber, fiber.props.children);
}

// 把之前的vdom转成child/sibling/return组成的链表
function reconcileChildren(wipFiber, elements) {
  let index = 0;
  let prevSibling = null;
  while (index < elements.length) {
    const element = elements[index];
    // fiber格式
    let newFiber = {
      type: element.type,
      props: element.props,
      dom: null,
      return: wipFiber,
      effectTag: "PLACEMENT", // 新增节点标记
    };
    if (index === 0) {
      wipFiber.child = newFiber;
    } else if (element) {
      prevSibling.sibling = newFiber;
    }
    prevSibling = newFiber;
    index++;
  }
}

function createDom(fiber) {
  let dom;
  if (fiber.type === "PLACEMENT") {
    dom = document.createTextNode("");
  } else {
    dom = document.createElement(fiber.type);
  }
  for (const prop in fiber.props) {
    setAttribute(dom, prop, fiber.props[prop]);
  }
  return dom;
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

// commit
function commitRoot() {
  commitWork(wipRoot.child);
  wipRoot = null;
}

function commitWork(fiber) {
  if (!fiber) {
    return;
  }
  let domParentFiber = fiber.return;
  while (!domParentFiber.dom) {
    domParentFiber = domParentFiber.return;
  }
  let domParent = domParentFiber.dom;
  if (fiber.effectTag === "PLACEMENT" && fiber.dom !== null) {
    domParent.appendChild(fiber.dom);
  }
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
  };
  console.log("render");
  nextFiberReconcileWork = wipRoot;
}

function isEventListenerAttr(key, value) {
  return typeof value == "function" && key.startsWith("on");
}

function isStyleAttr(key, value) {
  return key === "style" && typeof value == "object";
}

function isPlainAttr(key, value) {
  return typeof value != "object" && typeof value != "function";
}

const setAttribute = (dom, key, value) => {
  if (key === "children") {
    return;
  }
  if (key === "nodeValue") {
    dom.textContent = value;
  } else if (isEventListenerAttr(key, value)) {
    const eventType = key.slice(2).toLowerCase();
    dom.addEventListener(eventType, value);
  } else if (isStyleAttr(key, value)) {
    Object.assign(dom.style, value);
  } else if (isPlainAttr(key, value)) {
    dom.setAttribute(key, value);
  }
};
init();
const Cpp = {
  render,
  createElement,
};
