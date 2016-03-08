app.config(function ($routeProvider) {
    $routeProvider.when('/phone/:phoneName', {
        templateUrl: 'views/phoneDetails/phoneDetails.html',
        controller: 'DetailsCtrl'
    })
});

app.controller('DetailsCtrl', function($scope, $routeParams, getPhones) {
    var src = 'json/phones.json';

    $scope.name = $routeParams['phoneName'];
    getPhones.getPhone(src, $scope.name, function (data) {
        $scope.phone = data;
    })
});