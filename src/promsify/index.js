const fs = require("fs");
const promisify = require("./promisify").promisify;
// fs.readFile("./test.js", function (err, data) {
//   if (!err) {
//     console.log(data, "common");
//   } else {
//     console.log(err, "err");
//   }
// });

const readFileAsync = promisify(fs.readFile);
readFileAsync("./test.js")
  .then((res) => {
    console.log(typeof res, "res");
    // const data = JSON.parse(res.toString("utf8"));
    console.log(res, "resolved");
  })
  .catch((er) => {
    console.log(er, "error ");
  });
