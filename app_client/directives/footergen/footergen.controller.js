(function(){
    angular.module('footballers').controller('footerCtrl', footerCtrl);

    footerCtrl.$inject=['authentication', '$location', '$window'];
    function footerCtrl(authentication, $location, $window){
        var vm = this;

        vm.isLoggedIn = authentication.isLoggedIn();
        vm.logout = authentication.logout;

        vm.loginLabel = vm.isLoggedIn ? "logout": "login as admin"; 

        vm.handleLabel= function(){
            if(vm.isLoggedIn){
                vm.logout();
                $window.location.reload();
                return;
            }
            $location.path("/login");
    }
}
})();