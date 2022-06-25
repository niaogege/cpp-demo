/*
 * @Author: Chendapeng
 * @Date: 2021-10-05 11:20:46
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-05-20 21:34:38
 * @Description:
 */
var express = require("express");
var router = express.Router();
const albumData = require("./db/album.json");
const trackData = require("./db/track.json");
/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index.html");
});

router.get("/hook", function (req, res, next) {
  res.render("index.html");
});
router.get("/hook2", function (req, res, next) {
  res.render("index.html");
});
router.get("/redux1", function (req, res, next) {
  res.render("index.html");
});

router.get("/api/album/data", function (req, res) {
  setTimeout(() => {
    res.json(albumData);
  }, 2000);
});

router.get("/api/track/data", function (req, res) {
  setTimeout(() => {
    res.json(trackData);
  }, 5000);
});

module.exports = router;
