var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('home', {
        title: 'SAAS'
    });
});

router.get('/404', function (req, res, next) {
    res.render('404');
});


module.exports = router;