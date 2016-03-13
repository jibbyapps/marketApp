app.config(function ($routeProvider) {
    $routeProvider.when('/admin/dashboard/:category/addNewPhone',{
        templateUrl: 'views/addNew/addNew.html',
        controller: 'AddNewPhoneCtrl'
    })
});

app.controller('AddNewPhoneCtrl', function ($scope, $routeParams, getPhones, $http, $location, $window) {
   $scope.name = 'Pit';
    $scope.category = $routeParams['category'];
    $scope.phone = {};
    
    $scope.save = function () {
        getPhones.saveNewPhone('json/phones.json', $scope.category, $scope.phone, function (data) {
            $http.post('php/editJSON.php', data).success(function () {
                $location.path('/admin/dashboard');
                $window.location.reload();
            })
        });
    }
});