app.factory('getPhones', function ($http) {

    var getData = function (src, callback) {
        $http.get(src).success(callback);
    };
    var getPhone = function (src, name, callback) {
        getData(src, function (data) {
            angular.forEach(data, function (value, key) {
                angular.forEach(value.phones, function (value, key) {
                    if (value.name == name) return callback(value);
                })
            })
        })
    };

    return {
        getData: getData,
        getPhone: getPhone
    }
});