const data = {
  a1: "cpp",
  a2: "wmh",
  a3: "chendapeng"
};
const jsx = Cpp.createElement("ul", {
  className: "list"
}, Cpp.createElement("li", {
  className: "item",
  style: {
    background: "blue",
    color: "pink"
  },
  onClick: () => alert(data.a3)
}, data.a3), Cpp.createElement("li", {
  className: "item"
}, data.a1), Cpp.createElement("li", {
  className: "item"
}, data.a2));
console.log(JSON.stringify(jsx, null, 4));
Cpp.render(jsx, document.getElementById("root"));