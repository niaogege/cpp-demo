var vdom = {
  type: "ul",
  props: {
    className: "list",
  },
  children: [
    {
      type: "li",
      props: {
        className: "item",
        style: {
          background: "blue",
          color: "#fff",
        },
        onClick: function () {
          alert(1);
        },
      },
      children: ["aaaa"],
    },
    {
      type: "li",
      props: {
        className: "item",
      },
      children: ["bbbbddd"],
    },
    {
      type: "li",
      props: {
        className: "item",
      },
      children: ["cccc"],
    },
  ],
};

function isTextDom(vdom) {
  return typeof vdom === "string" || typeof vdom === "number";
}

function isElementDom(vdom) {
  return typeof vdom === "object" && typeof vdom.type === "string";
}

// 处理元素属性
// onClick 绑定
// style 合并到dom.style

function setAttribute(dom, key, val) {
  if (typeof val === "function" && key.startsWith("on")) {
    const eventType = key.slice(2).toLowerCase();
    dom.addEventListener(eventType, val);
  } else if (key === "style" && typeof val === "object") {
    Object.assign(dom.style, val);
  } else if (typeof val !== "function" && typeof val !== "object") {
    dom.setAttribute(key, val);
  }
}

const render = (vdom, parent = null) => {
  const mount = parent ? (el) => parent.appendChild(el) : (el) => el;
  if (isTextDom(vdom)) {
    return mount(document.createTextNode(vdom));
  } else if (isElementDom(vdom)) {
    const dom = mount(document.createElement(vdom.type));
    for (const child of vdom.children) {
      render(child, dom);
    }
    for (const prop in vdom.props) {
      setAttribute(dom, prop, vdom.props[prop]);
    }
    return dom;
  }
};

render(vdom, document.getElementById("root"));
