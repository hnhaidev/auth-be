const express = require("express");
const { hello } = require("../controllers/blog");
const router = express.Router();

router.get("/", hello);

module.exports = router;
