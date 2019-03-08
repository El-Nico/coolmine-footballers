(function(){
    angular
    .module('footballers')
    .directive('footergen',footergen);

    function footergen(){
        return {
            restrict: 'EA',
            templateUrl: '/directives/footergen/footergen.template.html',
            controller:'footerCtrl as fvm'
        };
    }
})();