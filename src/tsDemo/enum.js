let exports = {};
exports.__esModule = true;
exports.Sizes = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
var Sizes;
(function (Sizes) {
  Sizes[(Sizes["Small"] = 0)] = "Small";
  Sizes[(Sizes["Middle"] = 1)] = "Middle";
  Sizes[(Sizes["Large"] = 2)] = "Large";
})((Sizes = exports.Sizes || (exports.Sizes = {})));
var coffee = {
  name: "pro",
  size: Sizes.Middle,
};
console.log(coffee, "coffee");
var coffee1 = {
  name: "cpp",
  size: Sizes[Sizes.Small],
};
console.log(coffee1, "coffee1");
var coffee2 = {
  name: "cpp",
  size: 1 /* Middle */,
};
