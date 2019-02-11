const model = require('../model/product.js');
exports.create = function (req,res) {
    res.render('admin/category/form.ejs');
};
exports.save = function (req,res) {
    var category = new model({
        wish: req.body.wish,
        sender: req.body.sender
    });
    category.save();
    res.send('byebye');

};
exports.list= function (req,res) {
    model.find(function (err, list) {
        console.log({"list": list});
        res.render('admin/category/list.ejs', {"list": list});
    });
};
