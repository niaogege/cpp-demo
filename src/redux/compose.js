export default function compose(...funs) {
  if (!funs.length) {
    return (arg) => arg;
  }
  if (funs.length === 1) return funs[0];
  return funs.reduce(
    (a, b) =>
      (...args) =>
        a(b(args))
  );
}
// demo
// var double = (x) => x * 2;
// var three = (x) => x * 3;
// var sum = compose(double, three);
// var total = sum(10);
// console.log(total); // 60
