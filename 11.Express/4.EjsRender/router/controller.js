module.exports = function (app) {
  app.get("/", function (req, res) {
    var date = new Date();

    var render_date = {
      str: "문자얼입니다.",
      number: 100,
      date: date,
    };
    res.render("index.ejs", render_date);
  });

  app.get("/test", function (req, res) {
    res.render("test.ejs");
  });
};
