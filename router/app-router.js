const productController = require('../controller/product-controller');
exports.routing = function (app) {
    var listUser = [];
    app.get('/register', function (req,res) {
        res.render('client/register.ejs');
    });
    app.post('/register', function (req,res) {
        var user = {
            'fullName': req.body.fullName,
            'username': req.body.username,
            'password': req.body.password,
        };
        listUser.push(user);
        res.render('client/register-success.ejs', {'user': user});
    });
    app.get('/login', function (req,res) {
        res.render('client/login.ejs');
    });
    app.post('/login', function (req,res) {
        var user = {
            'username': req.body.username,
            'password': req.body.password,
        };
        var loginSuccess = false;
        for (var i = 0; i < listUser.length; i++) {
            var tempUser = listUser[i];
            if (tempUser.username == user.username && tempUser.password == user.password){
                loginSuccess = true;
                break;
            }
        }
        if (loginSuccess){
            res.send('Login thanh cong voi toi khoan' + user.username);
        } else
            res.send('Login 0 thanh cong');
    });
    //Khu vuc quan li san pham
    var listProduct = [];
    app.get('/create', productController.generateCreateProductForm);
    app.post('/create', productController.saveProduct);
    app.get('/list', productController.showListProduct);
    app.get('/admin/product/edit', function (req,res) {
        res.render('admin/product/update.ejs');
    });
    app.post('/admin/product/edit', function (req,res) {
        res.send('update thanh cong');
    });
    app.get('/admin/product/delete', function (req,res) {
        res.send('Delete thanh cong');
    });
};