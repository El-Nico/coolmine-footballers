(function(){
    angular.module('footballers').controller('home', home);

    home.$inject=['$http','authentication'];
    function home($http,authentication){
        var vm=this;
        vm.isLoggedIn=authentication.isLoggedIn();
        console.log(vm.isLoggedIn);
          $http({
              method : "GET",
              url : "/api/home"
            }).then(function mySuccess(response) {
              vm.events=response.data;
              console.log(vm.events);
            }, function myError(response) {
              console.log("error "+response);
            });
    }
})();