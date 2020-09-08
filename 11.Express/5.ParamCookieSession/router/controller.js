var bodyParser = require("body-parser");
// urlencodedParser: 이곳에 post 방식 요청을 통해 들어온 데이터가 다 들어있다.
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index.ejs");
  });

  app.get("/parameter", (req, res) => {
    var render_data = {
      data1: req.query.data1,
      data2: req.query.data2,
    };
    res.render("parameter.ejs", render_data);
  });

  // urlencodedParser: post 요청을 받기 위해 사용함
  app.post("/parameter", urlencodedParser, (req, res) => {
    var render_data = {
      data1: req.body.data1,
      data2: req.body.data2,
    };
    res.render("parameter.ejs", render_data);
  });

  app.get("/save_cookie", function (req, res) {
    // cookie 수명 지정
    var op = {
      maxAge: 365 * 24 * 60 * 60,
    };

    // 쿠키 저장
    res.cookie("cookie1", "aaaa", op);
    res.render("save_cookie.ejs");
  });

  app.get("/load_cookie", function (req, res) {
    var render_data = {
      cookie1: req.cookies.cookie1,
    };

    res.render("load_cookie.ejs", render_data);
  });

  app.get("/save_session", function (req, res) {
    req.session.data1 = 100;
    req.session.data2 = "안녕하세요.";

    res.render("save_session.ejs");
  });

  app.get("/load_session", function (req, res) {
    var render_data = {
      data1: req.session.data1,
      data2: req.session.data2,
    };
    res.render("load_session.ejs", render_data);
  });
};
