const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
var cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'dcrbahlsn',
    api_key: '469835146884474',
    api_secret: 'RWvZ8mplFWQncYjejuyXPaKcEdc'
});
// mongoose.connect('mongodb://sa:cyk0910@ds015690.mlab.com:15690/myshop', {useNewUrlParser: true});
mongoose.connect('mongodb://admin:admin123@ds331145.mlab.com:31145/hpny', {useNewUrlParser: true});
const router = require('./router/app-router');
app.use(bodyParser.urlencoded());
app.use(express.static('./public'));
app.use(fileUpload());
app.set('views', 'view');
app.set('view engine', 'ejs');
router.routing(app);
app.listen(process.env.PORT || 5000, function () {
    console.log("Chay thanh cong");
});
