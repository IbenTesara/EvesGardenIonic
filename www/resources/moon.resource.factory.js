angular.module('starter.factories').factory('MoonResourceFactory', function () {
    console.log("MoonResourceFactory loaded");

    var blueMoonDate = new Date(2003, 11, 23, 3, 44, 0);
    var date = new Date()
    var currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    var lunarPeriod = 29 * (24 * 3600 * 1000) + 12 * (3600 * 1000) + 44.05 * (60 * 1000);


    var zodiacSigns = {
        'capricorn': {
            sign: 'capricorn',
            plant: 'ROOT',
            element: 'EARTH',
            tasks: ['PLANT', 'CUTPRUN', 'CULTIVATE', 'FERT']
        },
        'aquarius': {
            sign: 'aquarius',
            plant: 'FLOWER',
            element: 'WIND',
            tasks: ['PLANT', 'WEEDS', 'PESTS', 'HARVEST']
        },
        'pisces': {
            sign: 'pisces',
            plant: 'LEAF',
            element: 'WATER',
            tasks: ['PLANT', 'SOW', 'TRANSPLANT', 'IRRIGATE']
        },
        'aries': {
            sign: 'aries',
            plant: 'SEED',
            element: 'FIRE',
            tasks: ['HARVEST', 'CULTIVATE', 'PESTS', 'WEEDS']
        },
        'taurus': {
            sign: 'taurus',
            plant: 'ROOT',
            element: 'EARTH',
            tasks: ['PLANT', 'CULTIVATE', 'CUTPRUN', 'TRANSPLANT']
        },
        'gemini': {
            sign: 'gemini',
            plant: 'FLOWER',
            element: 'WIND',
            tasks: ['CULTIVATE', 'WEEDS', 'PESTS', 'HARVEST']
        },
        'cancer': {
            sign: 'cancer',
            plant: 'LEAF',
            element: 'WATER',
            tasks: ['PLANT', 'IRRIGATE', 'TRANSPLANT', 'GRAFT']
        },
        'leo': {
            sign: 'leo',
            plant: 'SEED',
            element: 'FIRE',
            tasks: ['HARVEST', 'CULTIVATE', 'WEEDS', 'PESTS']
        },
        'virgo': {
            sign: 'virgo',
            plant: 'ROOT',
            element: 'EARTH',
            tasks: ['CULTIVATE', 'WEEDS', 'PESTS', 'PLANT']
        },
        'libra': {
            sign: 'libra',
            plant: 'FLOWER',
            element: 'WIND',
            tasks: ['PLANT', 'CULTIVATE', 'GERMINATE', 'TRANSPLANT']
        },
        'scorpio': {
            sign: 'scorpio',
            plant: 'LEAF',
            element: 'WATER',
            tasks: ['PLANT', 'IRRIGATE', 'GRAFT', 'TRANSPLANT']
        },
        'sagittarius': {
            sign: 'sagittarius',
            plant: 'SEED',
            element: 'FIRE',
            tasks: ['PLANT', 'WEEDS', 'PESTS', 'HARVEST']
        }
    }

    var tasks = {
        '1': 'CULTIVATE',
        '2': 'CUTANDPRUNE',
        '3': 'FERT',
        '4': 'GERMINATE',
        '5': 'GRAFT',
        '6': 'HARVEST',
        '7': 'IRRIGATE',
        '8': 'PLANT',
        '9': 'PESTS',
        '10': 'SOW',
        '11': 'TRANSPLANT',
        '12': 'WEEDS'
    }



    var moonPhases = {
        '0': "NEW",
        '1': "NEW",
        '2': "WAX_CRES_0",
        '3': "WAX_CRES_1",
        '4': "WAX_CRES_2",
        '5': "WAX_CRES_3",
        '6': "WAX_CRES_4",
        '7': "WAX_CRES_5",
        '8': "FIRST_QUA",
        '9': "WAX_GIB_0",
        '10': "WAX_GIB_1",
        '11': "WAX_GIB_2",
        '12': "WAX_GIB_3",
        '13': "WAX_GIB_4",
        '14': "WAX_GIB_5",
        '15': "FULL",
        '16': 'WAN_GIB_0',
        '17': 'WAN_GIB_1',
        '18': 'WAN_GIB_2',
        '19': 'WAN_GIB_3',
        '20': 'WAN_GIB_4',
        '21': 'WAN_GIB_5',
        '22': "LAST_QUA",
        '23': "WAN_CRES_0",
        '24': "WAN_CRES_1",
        '25': "WAN_CRES_2",
        '26': 'WAN_CRES_3',
        '27': 'WAN_CRES_4',
        '28': 'WAN_CRES_5',

    }

    var moonSigns = {
        '1': {
            'full': ["cancer", "leo"],
            'new': ["capricorn", "aquarius"]
        },
        '2': {
            'full': ["leo", "virgo"],
            'new': ["aquarius", "pisces"]
        },
        '3': {
            'full': ["virgo", "libra"],
            'new': ["pisces", "aries"]
        },
        '4': {
            'full': ["libra", "scorpio"],
            'new': ["aries", "taurus"]
        },
        '5': {
            'full': ["scorpio", "sagittarius"],
            'new': ["taurus", "gemini"]
        },
        '6': {
            'full': ["sagittarius", "capricorn"],
            'new': ["gemini", "cancer"]
        },
        '7': {
            'full': ["capricorn", "aquarius"],
            'new': ["cancer", "leo"]
        },

        '8': {
            'full': ["aquarius", "pisces"],
            'new': ["leo", "virgo"]
        },
        '9': {
            'full': ["pisces", "aries"],
            'new': ["virgo", "libra"]
        },
        '10': {
            'full': ["aries", "taurus"],
            'new': ["libra", "scorpio"]
        },
        '11': {
            'full': ["taurus", "gemini"],
            'new': ["scorpio", "sagittarius"]
        },
        '12': {
            'full': ["gemini", "cancer"],
            'new': ["sagittarius", "capricorn"]
        },
    };

    function getMoonPhase() {
        var moonPhaseTime = (currentDate.getTime() - blueMoonDate.getTime()) % lunarPeriod;
        var percentRaw = (moonPhaseTime / lunarPeriod);
        var lunarday = Math.round(29 * percentRaw);
        if (lunarday < 0) lunarday = Math.round(29 + 12 / 24 + 44.05 / (24 * 60) + 29 * percentRaw);
        return {
            lunar: lunarday,
            phase: moonPhases["" + lunarday]
        }
    }

    function getMoonSign() {
        var zodiac = getZodiacSign(currentDate.getDate(), currentDate.getMonth() + 1).sign;
        var lunar = getMoonPhase().lunar;
        var month = currentDate.getMonth() + 1;
        var moonSignObj = moonSigns["" + month];
        var moonSignOptions = [];
        if (lunar < 14) {
            moonSignOptions = moonSignObj.new;
        } else {
            moonSignOptions = moonSignObj.full;
        }

        var moonSign = moonSignOptions[0];
        if (moonSign === zodiac) {
            moonSign = moonSignOptions[1];
        }

        return zodiacSigns[moonSign];

    }


    function getZodiacSign(day, month) {
        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return zodiacSigns.capricorn;
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return zodiacSigns.aquarius;
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return zodiacSigns.pisces;
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return zodiacSigns.aries;
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return zodiacSigns.taurus;
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return zodiacSigns.gemini;
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return zodiacSigns.cancer;
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return zodiacSigns.leo;
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return zodiacSigns.virgo;
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return zodiacSigns.libra;
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return zodiacSigns.scorpio;
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return zodiacSigns.sagittarius;
        }
    }

    function getMoonAngle (position,date){
        var moon = SunCalc.getMoonPosition(date, position.lat, position.long);
        return moon.parallacticAngle * 57.2958;
    }


    return {
        getMoonPhase: function () {
            return getMoonPhase();
        },
        getMoonSign: function () {
            return getMoonSign();
        },
        getMoonAngle: function(position,date){
            return getMoonAngle(position,date);
        }
    }

});
