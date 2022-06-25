// 打乱数组
(function () {
  let arr = ["cpp", "ww", 6, false];
  arr = arr.sort(() => 0.5 - Math.random());
  console.log(arr);
})();

// 随机选一个
(function () {
  let arr = ["cpp", "ww", 6, false];
  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
  return random(arr);
})()(function () {
  let str = "320cpp980706wmh";
  const nums = str.replace(/\D/g, "");
  console.log(nums);
})();

(function () {
  let num = 43;
  const binaryNum = +num.toString(2);
  const hexadecimalNum = +num.toString(16);
  console.log(binaryNum, hexadecimalNum);
})();

function isReverse(str1, str2) {
  const normalize = (str) =>
    str.toLowerCase().normalize().split("").reverse().join("");
  return normalize(str1) === str2;
}
isReverse("cpp", "ppc"); // true

/**
 * 判断两个字符串是否互相排列
 */
function isAnagram(str1, str2) {
  const normalize = (str) =>
    str.toLowerCase().normalize("NFD").split("").sort().join("");
  return normalize(str1) === normalize(str2);
}
isAnagram("cpp", "wmh"); // false
isAnagram("cpp", "cpc"); // false
isAnagram("cpp", "ppc"); // true

// rgb -> hex
function rgbToHex(r, g, b) {
  const toHex = (num) => {
    const hex = num.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
rgbToHex(255, 255, 255);

// hex -> rgb
