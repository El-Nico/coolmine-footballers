
module.exports.homeCtrl=function(req, res, next) {
    res.render('index', { title: 'Express' });
}