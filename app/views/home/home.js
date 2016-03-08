app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
    })
});

app.controller('HomeCtrl', function ($scope, getPhones) {
    var src = 'json/phones.json';
    $scope.category = 'Samsung';
    $scope.getData = function () {
        getPhones.getData(src, function (data) {
            $scope.gallery = data;
            angular.forEach(data, function (value, key) {
                if(data[key].category == $scope.category) {
                    $scope.phones = data[key].phones;
                }
            });
        });
    };
    $scope.changeCategory = function (name) {
        $scope.category = name;
        $scope.getData();
    };
    $scope.getData();
});