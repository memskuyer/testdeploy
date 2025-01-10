const express = require("express");
const router = express.Router();

const controller = require("../controller/controllerPage");

router.get("/", controller.renderHome);

module.exports = router;
