const data = {
  a1: "cpp",
  a2: "wmh",
  a3: "chendapeng",
};
const jsx = (
  <ul className="list">
    <li
      className="item"
      style={{ background: "blue", color: "pink" }}
      onClick={() => alert(2)}
    >
      {data.a3}
    </li>
    <li className="item">{data.a1}</li>
    <li className="item">{data.a2}</li>
  </ul>
);

render(jsx, document.getElementById("root"));
