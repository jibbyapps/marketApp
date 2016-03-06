var app = angular.module('marketApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.otherwise({redirect: '/'})
});
