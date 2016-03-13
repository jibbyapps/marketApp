app.config(function ($routeProvider) {
    $routeProvider.when('/admin/dashboard/edit/:phoneName',{
        templateUrl: 'views/edit/edit.html',
        controller: 'EditPhoneCtrl'
    })
});

app.controller('EditPhoneCtrl', function ($scope, $routeParams, getPhones, $http, $location, $window) {
    $scope.name = $routeParams['phoneName'];
    getPhones.getPhone('json/phones.json', $scope.name, function (data) {
        $scope.phone = data;
    });
    $scope.save = function () {
        getPhones.saveChanges('json/phones.json', $scope.name, $scope.phone, function (data) {
            $http.post('php/editJSON.php', data).success(function (data) {
                if(data) {
                    $location.path('/admin/dashboard');
                    $window.location.reload();
                }
            })
        });



    }
});