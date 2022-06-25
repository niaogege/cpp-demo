export {};
var obj = {
  name: "CPP",
};
var { [Reflect.ownKeys(obj)]: name } = obj;
console.log(name, "TT"); // 'CPP'

var obj2 = {
  obj: {
    name: "CPP_WMH",
  },
};
// ?
