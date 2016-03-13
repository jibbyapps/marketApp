app.config(function ($routeProvider) {
    $routeProvider.when('/admin/dashboard',{
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
    })
});

app.controller('DashboardCtrl', function ($scope, getPhones, $http, $window) {
    var src = 'json/phones.json';

    getPhones.getData(src, function (data) {
        $scope.phones = data;
    });
    $scope.addNewCategory = function () {
        var newPhone = {};
        newPhone.category = prompt('Введите название категарии');

        console.log(newPhone);
        getPhones.getData(src, function (data) {
            data.push(newPhone);
            console.log(data);
            $http.post('php/editJSON.php', data).success(function () {
                $window.location.reload();
            })
        })
    };
    $scope.remove = function (name) {
        getPhones.deleteCategory(src, name, function (data) {
            console.log(data);
            $http.post('php/editJSON.php', data).success(function () {
                $window.location.reload();
            })
        })
    };

});