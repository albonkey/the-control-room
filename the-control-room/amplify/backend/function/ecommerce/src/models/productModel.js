const mongoose = require('mongoose')
const { getConnection } = require('../mongoose')
const connection = getConnection()


const productSchema = new mongoose.Schema({
  name:{ type: String, required: true},
  description: { type: String, required: true, default: false},
  price:{ type: Number, required: true, default: 0},
  image:{ data: Buffer, contentType: String},
  category: { type: String, required: true},
  countInStock: { type: Object, required: true},

});

const productModel = connection.model('Product', productSchema);

module.exports = productModel;
