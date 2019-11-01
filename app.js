const express = require("express");
const bodyParser = require("body-parser");
const exhbs = require("express-handlebars");

const app = express();

app.use(bodyParser({ extended: false }));

const users = [];

app.set("view engine", "hbs");

app.engine(
  "hbs",
  exhbs({
    defaultLayout: "main-layout",
    extname: "hbs"
  })
);

app.set("views", "views");

app.get("/", (_req, res) => {
  res.render("index", {
    pageTitle: "Add User"
  });
});

app.get("/users", (_req, res) => {
  res.render("users", {
    pageTitle: "User",
    users: users,
    hasUsers: users.length > 0
  });
});

app.post("/add-user", (req, res) => {
  const { username } = req.body;
  users.push({
    name: username
  });
  res.redirect("/users");
});

app.listen(3000, () => {
  console.clear();
  console.log(`\n=== server running on 3000 ===\n`);
});
