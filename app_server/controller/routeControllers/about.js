
module.exports.aboutCtrl= function(req, res, next){
    res.render('generic-text', {
        title: 'About',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis fermentum enim, eu rutrum lorem facilisis id. Integer laoreet quam id ornare lacinia. Ut rutrum turpis sit amet lorem pellentesque accumsan. Proin vehicula tortor tellus. Sed sed vestibulum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc tempus risus dui, sed mollis purus condimentum sed. Maecenas ac rhoncus lacus. Curabitur lectus nulla, varius vitae turpis sed, mollis maximus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur tellus eu quam fermentum gravida. Nam gravida nisl nulla, eu interdum tellus accumsan at. Fusce porta turpis a eros pretium, eget ullamcorper turpis faucibus. Donec est eros, consectetur ut consectetur quis, auctor ut magna. Donec euismod suscipit suscipit. '
    });
}