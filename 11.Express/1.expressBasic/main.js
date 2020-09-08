var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("ROOT"); // ROOT 라는 문자열을 보내겠다는 의미.
});

app.get("/test", function (req, res) {
  res.send("TEST");
});

var server = app.listen(2000, function () {
  console.log("서버 가동");
});
