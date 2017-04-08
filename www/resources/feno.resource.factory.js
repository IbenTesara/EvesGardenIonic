angular.module('starter.factories').factory('FenoResourceFactory', function () {
    console.log("FenoResourceFactory loaded");
    var feno = [
        {
            name: 'WINTER',
            images: 4
    },
        {
            name: 'STARTSPRING',
            images: 4
        },
        {
            name: 'EARLYSPRING',
            images: 3
        },
        {
            name: 'SPRING',
            images: 0
        },
        {
            name: 'PRESUMMER',
            images : 2
        },
        {
            name: 'HIGHSUMMER',
            images : 2
        },
        {
            name : 'AFTERSUMMER',
            images : 2
        },
        {
            name: 'EARLYFALL',
            images: 3
        },
        {
            name: 'FALL',
            images : 5
        },
        {
            name: 'LATEFALL',
            images : 4
        }
    ]

    function getFeno() {
        return feno;
    };

    function getCurrentFeno(date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();

        if ((day >= 15 && month === 12) || (day <= 15 && month === 2)) {
            return feno[0];
        } else if ((day > 15 && month === 2) || (day <= 31 && month === 3)) {
            return feno[1];
        } else if (day <= 15 && month === 4) {
            return feno[2];
        } else if ((day > 15 && month === 4) || (day <= 31 && month === 5)) {
            return feno[3];
        } else if (day <= 30 && month === 6) {
            return feno[4];
        } else if (day <= 31 && month === 7) {
            return feno[5];
        } else if (day <= 31 && month === 8) {
            return feno[6];
        } else if (day <= 15 && month === 9) {
            return feno[7];
        } else if ((day > 15 && month === 9) || (day <= 31 && month === 10)) {
            return feno[4];
        } else if ((day >= 1 && month === 11) || (day < 15 && month === 12)) {
            return feno[4];
        }
    }

    return {
        getCurrentFeno: function (date) {
            return getCurrentFeno(date);
        },
        getFeno: function () {
            return getFeno();
        }
    }

});
