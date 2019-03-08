(function (){
    angular
        .module('footballers')
        .controller('register', register);
        register.$inject =['$location', 'authentication'];
        function register($location, authentication){
            var vm=this;

            vm.credentials ={
                name: "",
                email: "",
                password: ""
            };

            vm.returnPage = $location.search().page || '/';

            vm.onSubmit = function(){

            }
        }



})();