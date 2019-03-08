(function () {
    angular.module('footballers').controller('createEvent', createEvent);

    createEvent.$inject = ['$http', 'authentication','$location'];
    function createEvent($http, authentication,$location) {
        var vm = this;

        vm.onSubmit = function () {

            $http({
                url: '/api/home',
                method: "POST",
                data: {
                    type: vm.type,
                    isNextEvent: vm.isNextEvent=="yes",
                    subtitle: vm.subtitle,
                    title: vm.title,
                    participants: vm.participants,
                    details: vm.details,
                },
                headers: { Authorization: 'Bearer ' + authentication.getToken() }
            }).then(function successCallback(response) {
                console.log('positive ' + response.data);
                $location.path("/");
            }, function errorCallback(response) {
                console.log('negaitve ' + response);
            });
        };
    };
})();