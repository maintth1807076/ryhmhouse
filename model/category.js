const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var categorySchema = new Schema({
    id: {type: Number},
    name: {type: String},
    thumbnail: {type: String},
    createdAt: {type: Number},
    updatedAt: {type: Number},
    deletedAt: {type: Number},
    status: {type: Number}
});
module.exports = mongoose.model('category', categorySchema);
