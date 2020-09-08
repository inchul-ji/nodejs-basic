var express = require("express");
var ejs = require("ejs");

var app = express();
var controller = require("./router/controller")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

// html 파일에서 다른 파일을 이용할 경우
// public 폴더의 것들을 갖다 쓰겠다는 의미.
app.use(express.static("public"));

var server = app.listen(2000, function () {
  console.log("서버 가동");
});
