const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var productSchema = new Schema({
    name: {type: String},
    price: {type: Number},
    thumbnail: {type: String},
    description: {type: String},
    // id: {type: Number},
    // detail: {type: String},
    // createdAt: {type: Number},
    // updatedAt: {type: Number},
    // deletedAt: {type: Number},
    // status: {type: Number}
});
module.exports = mongoose.model('product', productSchema);
