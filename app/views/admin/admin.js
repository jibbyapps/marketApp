app.config(function ($routeProvider) {
    $routeProvider.when('/admin', {
        templateUrl: 'views/admin/admin.html',
        controller: 'AdminCtrl'
    })
});

app.controller('AdminCtrl', function ($scope) {
    $scope.name = "pit";
});