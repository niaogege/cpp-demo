const data = {
  a1: "cpp",
  a2: "wmh",
  a3: "chendapeng"
};
const jsx = cpp("ul", {
  className: "list"
}, cpp("li", {
  className: "item",
  style: {
    background: "blue",
    color: "pink"
  },
  onClick: () => alert(2)
}, data.a3), cpp("li", {
  className: "item"
}, data.a1), cpp("li", {
  className: "item"
}, data.a2));
render(jsx, document.getElementById("root"));