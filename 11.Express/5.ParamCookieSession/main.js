var express = require("express");
var app = express();
var ejs = require("ejs");
var cookieParser = require("cookie-parser");
var session = require("express-session");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);
// express 모듈에서 cookiepParser를 사용하여 Cookie를 분석한다.
app.use(cookieParser());
app.use(
  session({
    secret: "abcdefg", // 아무거나 상관없지만, 해당 정보를 가지고 암호화를 한다.
    resave: false,
    saveUninitialized: true,
  })
);

var router = require("./router/controller")(app);

var server = app.listen(2000, function () {
  console.log("서버 가동");
});
