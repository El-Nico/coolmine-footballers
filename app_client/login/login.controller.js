(function(){
    angular.module('footballers').controller('loginCtrl',loginCtrl);

    loginCtrl.$inject =['$location', 'authentication'];
    function loginCtrl($location, authentication){
        var vm=this;
        vm.credentials ={
            email:"",
            password:""
        };

        vm.returnPage=$location.search().page || '/';

        vm.onSubmit =function(){
            vm.formError ="";
            if(!vm.credentials.email || !vm.credentials.password){
                vm.formError="all fields required";
                return false;
            } else {
                vm.doLogin();
            }
        };

        vm.doLogin = function () {
            vm.formError = "";
            authentication
                .login(vm.credentials)
                .then(function () {
                    $location.search('page', null);
                    $location.path(vm.returnPage);
                })
                .catch(function (err) {
                    vm.formError = err;
                });
        };
    }

})();