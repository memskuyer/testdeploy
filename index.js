const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const hbs = require("hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./src/pages"));

const routerPages = require("./src/router/routerPages");

app.use("/", routerPages);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
