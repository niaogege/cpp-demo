function isTextVdom(vdom) {
  return typeof vdom == "string" || typeof vdom == "number";
}

function isElementVdom(vdom) {
  return typeof vdom == "object" && typeof vdom.type == "string";
}
// dom是否是函数类型
function isComponent(vdom) {
  return typeof vdom === "function";
}
const render = (vdom, parent = null) => {
  const mount = parent ? (el) => parent.appendChild(el) : (el) => el;

  if (isTextVdom(vdom)) {
    return mount(document.createTextNode(vdom));
  } else if (isElementVdom(vdom)) {
    const dom = mount(document.createElement(vdom.type));
    for (const child of [].concat(...vdom.children)) {
      // children 元素也是 数组，要拍平
      render(child, dom);
    }
    for (const prop in vdom.props) {
      setAttribute(dom, prop, vdom.props[prop]);
    }
    return dom;
    // 函数式组件
  } else if (isComponent(vdom)) {
    const props = Object.assign({}, vdom.props, {
      children: vdom.children,
    });
    if (Component.isPrototypeOf(vdom.type)) {
      const instance = new vdom.type(props);
      instance.componentWillMount(); // 即将初始化
      const componentVdom = instance.render();
      instance.dom = render(componentVdom, parent);
      instance.componentDidMount();
      return instance.dom;
    } else {
      const componentVdom = vdom.type(props); // dom 都是li/div/'cpp'这种，类函数不一样
      return render(componentVdom, parent);
    }
  } else {
    throw new Error(`Invalid VDOM: ${vdom}.`);
  }
};

function isEventListenerAttr(key, value) {
  return typeof value == "function" && key.startsWith("on");
}

function isStyleAttr(key, value) {
  return key == "style" && typeof value == "object";
}

function isPlainAttr(key, value) {
  return typeof value != "object" && typeof value != "function";
}

const setAttribute = (dom, key, value) => {
  if (isEventListenerAttr(key, value)) {
    const eventType = key.slice(2).toLowerCase();
    dom.addEventListener(eventType, value);
  } else if (isStyleAttr(key, value)) {
    Object.assign(dom.style, value);
  } else if (isPlainAttr(key, value)) {
    dom.setAttribute(key, value);
  }
};
class Component {
  constructor(props) {
    this.props = props || {};
    this.state = null;
  }
  setState(nextState) {
    this.state = nextState;
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return <></>;
  }
}
const cpp = (type, props, ...children) => {
  if (props === null) props = {};
  return {
    type,
    props,
    children,
  };
};
