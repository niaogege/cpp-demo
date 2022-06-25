/*
 * @Author: Chendapeng
 * @Date: 2021-05-20 14:54:06
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-05-20 21:27:16
 * @Description:
 */
var express = require("express");
var nunjucks = require("nunjucks");
var proxy = require("http-proxy-middleware");
var compression = require("compression");
var path = require("path");
var url = require("url");
var app = express();
// var env = require('./env')
// var targetHost = env.env
var env = {
  port: 6060,
};

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type, Autherization, "
  );
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

var router = require("./router");
app.use(compression());

nunjucks.configure("build", {
  autoescape: true,
  express: app,
});

app.use("/", router);
console.log(
  express.static(path.join(__dirname, "build"), {
    maxAge: "1y",
    expires: "1y",
    Etag: false,
    lastModified: false,
  }),
  "static"
);
app.use(
  express.static(path.join(__dirname, "build"), {
    maxAge: "1y",
    expires: "1y",
    Etag: false,
    lastModified: false,
  })
);

app.use(function (req, res, next) {
  const urlObject = url(req.url);
  const { pathname } = urlObject;
  next();
});

var server = app.listen(env.port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("app listening at http://127.0.0.1:6060", host, port);
});
