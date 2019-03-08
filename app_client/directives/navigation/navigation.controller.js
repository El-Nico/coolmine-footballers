(function (){
    angular
        .module('footballers')
        .controller('navigationCtrl', navigationCtrl);
    
        navigationCtrl.$inject=['$location','authentication','$window'];
    function navigationCtrl($location, authentication, $window){
        var vm = this;

        vm.currentPath = $location.path();

        vm.isLoggedIn = authentication.isLoggedIn();

        vm.currentUser = authentication.currentUser();


        vm.logout = function(){
            authentication.logout();
            $window.location.reload();
        };
    }
})();