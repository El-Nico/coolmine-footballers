(function(){
    angular.module('footballers').directive('carousel', carousel);

    function carousel(){
        return{
            restrict: 'EA',
            templateUrl:'/directives/carousel/carousel.directive.html'

        }
    };
})();