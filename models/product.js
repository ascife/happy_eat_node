const {Schema, model} = require("mongoose");
const uuid = require("uuid").v4;

const ProductSchema = Schema({
  id: {type: String, default: ()=> uuid()},
  description: String,
  ubication: String,
  imageUrl: String
})

ProductSchema.set("toJSON", {
  transform: (document, returnedObject)=> {
    delete returnedObject.__v;
    delete returnedObject._id;
  }
})

module.exports = model("product", ProductSchema);