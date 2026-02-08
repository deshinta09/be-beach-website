const express = require("express");
const router = express.Router();
const routerUser = require("./user");
const routerProduct = require("./product");

router.use("/", routerUser);
router.use("/products", routerProduct);

module.exports = router;
