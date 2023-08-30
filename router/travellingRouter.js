const express = require("express");
const router = express.Router();
const cModel = require("../controller/travellingController");

router.post("/add", cModel.Add);

module.exports = router;
