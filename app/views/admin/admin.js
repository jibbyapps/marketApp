app.config(function ($routeProvider) {
    $routeProvider.when('/admin', {
        templateUrl: 'views/admin/admin.html',
        controller: 'AdminCtrl'
    })
});

app.controller('AdminCtrl', function ($scope, $http, $location) {
    $scope.master = {};

    $scope.update = function(user) {
        $scope.master = angular.copy(user);

        $http.post('index.php', $scope.master).success(function (data) {
            if(data) {
                $location.path('/admin/dashboard');
            } else {
                $scope.error = "Не правильно введен логин или пароль";
            }
        })
    };
});