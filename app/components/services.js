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
    var saveChanges = function (src, name, obj, callback) {
        getData(src, function (data) {
            angular.forEach(data, function (value, key) {
                angular.forEach(value.phones, function (value, key) {
                    if (value.name == name) {
                        value.name = obj.name;
                        value.img = obj.img;
                        value.description = obj.description;
                        value.price = obj.price;
                        return callback(data);
                    }
                })
            })
        })
    };
    var deleteCategory = function (src, name, callback) {
        getData(src, function (data) {
            angular.forEach(data, function (value, key) {
                if(value.category == name) {
                    data.splice(key,1);
                    return callback(data);
                }
            })
        });
    };

    var saveNewPhone = function (src, category, phone, callback) {
        getData(src, function (data) {
            angular.forEach(data, function (value, key) {
                if(value.category == category) {
                    value.phones.push(phone);
                    return callback(data);
                }
            })
        })
    };

    return {
        getData: getData,
        getPhone: getPhone,
        saveChanges: saveChanges,
        deleteCategory: deleteCategory,
        saveNewPhone: saveNewPhone
    }
});