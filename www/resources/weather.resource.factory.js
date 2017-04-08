angular.module('starter.factories').factory('WeatherResourceFactory', function () {
    console.log("WeatherResourceFactory loaded");

    function getCurrentWeather ( ){

    }
     navigator.geolocation.getCurrentPosition(
        function (success) {
            console.log(success.coords);
            vm.location = {
                longitude: success.coords.longitude,
                latitude: success.coords.latitude
            };
            console.log(vm.location);
            getWeather(vm.location.longitude, vm.location.latitude);
        },
        function (error) {
            console.log("Something went wrong whilst retrieving location info.");
        });

    // Get weather data
    function getWeather(long, lat) {
        $http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=e75b002a2cc5ac8904cf1997481d21b5').then(
            function (success) {
                console.log(success);
                return success;
            },
            function (error) {
                console.log("Something went wrong wilst retrieving weather info");
                console.log(error);
            })
    }

    return {
        getCurrentWeather: function (date) {
            return getCurrentWeather(date);
        }
    }

});
