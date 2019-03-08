(function(){
//module instantiator
angular.module('footballers', /*dependencies*/['ngRoute']);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider,$locationProvider){
    $routeProvider.when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'home',
        controllerAs:'vm'
    })
    .when('/about',{
        templateUrl: '/about/about.view.html'
    })
    .when('/adminDashboard',{
        templateUrl: '/about/about.view.html'
    })
    .when('/login',{
        templateUrl: '/login/login.view.html',
        controller:'loginCtrl',
        controllerAs: 'vm'
    })
    .when('/admin/register',{
        templateUrl: '/register/register.view.html',
        controller:'register',
        controllerAs: 'vm'
    })
    .when('/createEvent',{
        templateUrl: '/createEvent/createEvent.view.html',
        controller:'createEvent',
        controllerAs:'vm'
    })
    .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
}
angular
    .module('footballers')
    .config(['$routeProvider', '$locationProvider',config]);
})();