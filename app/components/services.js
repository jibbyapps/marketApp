app.factory('getPhones', function ($http) {

    var gatData = function (src, callback) {
        $http.get(src).success(callback);
    };

    return {
        gatData: gatData
    }
});