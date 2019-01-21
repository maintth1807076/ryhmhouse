const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://sa:cyk0910@ds015690.mlab.com:15690/myshop', {useNewUrlParser: true});
var Schema = mongoose.Schema;
var productSchema = new Schema({
    name: String,
    price: Number
});
var Product = mongoose.model('product', productSchema);
const router = require('./router/app-router');
app.use(bodyParser.urlencoded());
app.use(express.static('./public'));
app.set('views', 'views');
app.set('view engine', 'ejs');
app.get('/demo', function (req,res) {
    var product = new Product({
        name: req.query.name,
        price: req.query.price
    });
    product.save();
    res.send('byebye');
});
app.get('/list', function (req,res) {
    Product.find(function (err, products) {
        console.log({"list":products});
        res.render('admin/product/list.ejs',{"listProduct":products});
    });
});
router.routing(app);
app.listen(process.env.PORT || 5000, function () {    console.log("Chay thanh cong");});
