const mongoose = require("mongoose");
/*
var Item = new ItemSchema({ img: { data: Buffer, contentType: String } });
var Item = mongoose.model("Clothes", ItemSchema);
*/
const itemSchema = mongoose.Schema(
    { img: { data: Buffer, contentType: String } }
  );
  
  module.exports = mongoose.model("Item", itemSchema);
