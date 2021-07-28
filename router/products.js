const router = require("express").Router();
const Product = require("../models/product");

router.get("/get_all", (req, res)=> {
  Product.find({})
  .then((result)=> {
    result = result.map(r => r.toJSON());
    res.json(result);
  })
})

router.post("/upload", (req, res)=> {
  let {description, ubication} = req.body;
  let image = req.file;

  if(
    image === undefined ||
    description === undefined ||
    ubication === undefined)
    return;

  Product.create({
    imageUrl: image.path.slice("/public".length),
    description: description,
    ubication: ubication
  })
  .then((product)=> {
    res.json(product.toJSON());
  })
  .catch((err)=> {
    res.json({error: true, type: "bd"});
  })
})

module.exports = router;