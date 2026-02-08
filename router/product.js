const express = require("express");
const ControllerProduct = require("../controller/product");
const router = express.Router();

router.get("/products", ControllerProduct);

module.exports = router;
