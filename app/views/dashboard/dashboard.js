app.config(function ($routeProvider) {
    $routeProvider.when('/admin/dashboard',{
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
    })
});

app.controller('DashboardCtrl', function ($scope) {
    $scope.name = 'Pit';
});