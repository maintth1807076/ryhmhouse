var listProduct = [];
exports.generateCreateProductForm = function (req,res) {
    res.render('admin/product/form.ejs');
};
exports.saveProduct = function (req,res) {
    var product = {
        'name': req.body.name,
        'thumnail': req.body.thumnail,
        'price': req.body.price,
        'description': req.body.description
    };
    listProduct.push(product);
    res.render('create-success', {'listProduct': listProduct});
};
exports.showListProduct= function (req,res) {
    res.render('admin/product/list.ejs', {'listProduct': listProduct});
};
