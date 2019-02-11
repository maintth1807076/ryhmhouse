var cloudinary = require('cloudinary');
const model = require('../model/product.js');
exports.create = function (req,res) {
    res.render('admin/product/form.ejs');
};
exports.save = function (req,res) {
    console.log("Xử lý file.");
    var product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };
    if (req.files && req.files.thumbnail != undefined) {
        var fileGettingUploaded = req.files.thumbnail.data;
        cloudinary.uploader
            .upload_stream(function (error, result) {
                console.log(result)
                // var imageUrl = result.url;
                // product.thumbnail = imageUrl;
                // product.save();
                // // res.redirect("/admin/product/list");
                // res.send("Lưu sản phẩm thành công.");
                // console.log(product);
            })
            .end(fileGettingUploaded);
    } else {
        console.log("Have no file");
        product.thumbnail = "https://www.touchtaiwan.com/images/default.jpg";
        product.save();
        res.send("Lưu sản phẩm thành công.");
    }
};
exports.list = function (req,res) {
    // model.find(function (err, list) {
    //     console.log({"list": list});
    //     res.render('admin/product/list.ejs', {"listProduct": list});
    // });
    res.render('admin/product/list.ejs', product);
};
