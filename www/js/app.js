document.addEventListener('deviceready', function(){
    navigator.splashscreen.hide();
}, false);

var app = angular.module('app', []);

app.factory('GeolocationService', function($window, $q, $rootScope){
    var geolocation = $window.navigator.geolocation;
    return {
        getCurrentPosition : function(onSuccess, onError){
            geolocation.getCurrentPosition(function(position){
                $rootScope.$apply(function(){
                    onSuccess(position);
                })
            }, function(){
                $rootScope.$apply(function(){
                    onError();
                })
            })
        }
    }
})

app.config(function($routeProvider){
    $routeProvider
        .when('/home', {templateUrl: 'partials/home.html'})
        .when('/tours', {templateUrl: 'partials/tours.html'})
        .when('/explore', {templateUrl: 'partials/explore.html'})
        .when('/profil', {templateUrl: 'partials/profil.html'})
        .when('/plane', {templateUrl: 'partials/home/plane.html'})
        .when('/train', {templateUrl: 'partials/home/train.html'})
        .when('/car', {templateUrl: 'partials/home/car.html'})
        .otherwise({redirectTo: '/home'})
})