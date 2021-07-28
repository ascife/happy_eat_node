const router = require("express").Router();

const api_product = require("./products");
router.use("/products", api_product);

module.exports = router;