// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.factories', 'ngLodash', 'pascalprecht.translate'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

//DarkSkyApi key : 6de51439881389305b4d7b0d702f43cc

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'components/dash/dash.view.html',
                controller: 'DashCtrl as vm'
            }
        }

    })

    .state('tab.calendar', {
            url: '/calendar',
            views: {
                'tab-calendar': {
                    templateUrl: 'components/calendar/calendar.view.html',
                    controller: 'CalendarCtrl as vm'
                }
            }
        })
        .state('tab.garden', {
            url: '/garden',
            views: {
                'tab-garden': {
                    templateUrl: 'components/garden/garden.view.html',
                    controller: 'GardenCtrl as vm'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

})

.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        'CULTIVATE_TITLE': 'Prepare',
        'CUTPRUN_TITLE': 'Prune',
        'FERT_TITLE': 'Fertilize',
        'GERMINATE_TITLE': 'Germinate',
        'GRAFT_TITLE': 'Graft',
        'HARVEST_TITLE': 'Harvest',
        'IRRIGATE_TITLE': 'To water, irrigation',
        'PLANT_TITLE': 'Plant',
        'PESTS_TITLE': 'Destroy pests',
        'SOW_TITLE': 'Sow',
        'TRANSPLANT_TITLE': 'Transplant',
        'WEEDS_TITLE': 'Destroy weeds',
        'WATER_TITLE': 'Water',
        'FIRE_TITLE': 'Fire',
        'AIR_TITLE': 'Air',
        'EARTH_TITLE': 'Earth',
        'WATER_TEXT': 'Wet. <br/> Soil seldom dries out completely.<br/>Tendency to rain is higher.',
        'EARTH_TEXT': 'Cool/cold.<br/>Soil feels cool.<br/>Sometimes even the smallest uy cloud can give you goose pimples.',
        'AIR_TEXT': 'Light/clear.<br/>Soil and plants absorf more light than usual.<br/>Even with clouds in sky, you may need to wear sunglasses.<br/>Pleasant days.',
        'FIRE_TEXT': 'Warm/hot.<br/>Feels warm even sky is cloudy.<br/>Drying effect, especially in leo.</br>Nice days for outing.',
        'LEAF_TITLE': 'Leaf',
        'FLOWER_TITLE': 'Flower',
        'SEED_TITLE': 'Fruit/Seeds',
        'ROOT_TITLE': 'Roots',
        'LEAF_TEXT': 'Moon particularly affects the leaf.',
        'FLOWER_TEXT': 'Moon particularly affects the flower.',
        'SEED_TEXT': 'Repotting and new planting of balcony and house plants is most succesful. Plants take root quickly when moon is in Virgo.',
        'ROOT_TEXT': 'Moon particularly affects the root.',
        'ARIES_TEXT': 'Fire sign. Barren and dry. Fiery and masculine. Harvest root and fruit for storage. Cultivate, destroy weeds and pests. Do not plant seeds.',
        'TAURUS_TEXT': 'Earth sign. Productive and moist. Earthy and feminine. Planting many crops, particularly potatoes and root crops. Also a good sign for leafy vegetables such as lettuce, cabbage and spinach. Also good time for transplanting.',
        'GEMINI_TEXT': 'Air sign. Barren and dry. Airy and masculine. Good time for destroying noxious growths, weeds and pests. Also good for cultivation. Harvest root and fruit for storage. Melon seeds respond well in this sign.',
        'CANCER_TEXT': 'Water sign. Very fruitful and moist. Watery and feminine. Most productive sign: used extensively for planting any seeds, transplanting and irrigation. Also good for grafting',
        'LEO_TEXT': 'Fire sign. Very barren and dry. Fiery and masculine. Cultivate, harvest root and fruit for storage. An excellent time to destroy weeds',
        'VIRGO_TEXT': 'Earth sign. Barren and moist. Earthy and feminine. Some owers and vines are favored by it. Good for cultivation and destroying weeds and pests. Good for all garden chores other than planting.',
        'LIBRA_TEXT': 'Air signs. Semi-fruitful and moist. Airy and masculine. Used for planting many crops and producing good roots and growth. Very good sign for owers and vines. Also used for seeding hay, corn fodder, etc.',
        'SCORPIO_TEXT': 'Water sign. Very fruitful and moist. Watery and feminine. Best planting sign for sturdy plants and vines. Tomatoes like to be transplanted in Scorpio, and it is a good sign for corn and squash. Graft or prune in the third and fourth quarter to retard growth and promote better fruit. Also a good sign for irrigation and transplanting',
        'SAGITARIUS_TEXT': 'Fire sign. Barren and dry. Fiery and masculine. Good sign in which to cultivate the soil. Good harvest time, especially for roots and onions. Plant onion sets and fruit trees, seeding hay.',
        'CAPRICORN_TEXT': 'Earth sign. Productive and dry. Earthy and feminine. Good for planting potatoes, tubers and other root crops and for encouraging strong hardy growth. Good for grafting, and pruning to promote healing and applying organic fertilizer.',
        'AQUARIUS_TEXT': 'Air sign. Barren and dry. Airy and masculine. Harvest root and fruit for storage. Cultivate, destroy noxious growths, weeds and pests. Good time for planting onion sets. Limit garden chores to weeding and cleanup.',
        'PISCES_TEXT': 'Water sign. Very productive, fruitful and moist. Watery and feminine. Good for planting all seeds. Second best sign for planting and transplanting. Especially good for root growth and irrigation.',
        "WINTER": "Winter",
        "STARTSPRING": "Start of spring",
        "EARLYSPRING": "Early spring",
        "SPRING": "Spring",
        "PRESUMMER": "Pre summer",
        "HIGHSUMMER": "Summer",
        "AFTERSUMMER": "After summer",
        "EARLYFALL": "Early fall",
        "FALL": "Full fall",
        "LATEFALL": "Late fall",
        "NEW" : 'New moon',
        "WAX_CRES" : 'Waxing Cresent',
        "FIRST_QUA" : "First quarter",
        "WAX_GIB" : "Waxing gibbous",
        "FULL" : "Full moon",
        "WAN_GIB" : "Waning gibbous",
        "LAST_QUA": "Last quarter",
        "WAN_CRES" : "Waning crescent",
        "NEW_TEXT" : 'Purpose: Beginnings <br/>Location: 0 - 45 degrees ahead of the sun',
        "WAX_CRES_TEXT" : 'Purpose: Movement <br/>Location: 45 - 90 degrees ahead of the sun',
        "FIRST_QUA_TEXT" : 'Purpose: Shaping  <br/>Location: 90 - 135 degrees ahead of the sun',
        "WAX_GIB_TEXT" : 'Purpose: Details <br/>Location: 135 - 180 degrees ahead of the sun',
        "FULL_TEXT" : 'Purpose: Completion and celebration <br/>Location: 1180 - 225 degrees ahead of the sun',
        "WAN_CRES_TEXT" : 'Purpose: Rest <br/>Location: 315 - 360 degrees ahead of the sun',
        "LAST_QUA_TEXT" : 'Purpose: Absolute destruction <br/>Location: 270 - 315 degrees ahead of the sun',
        "WAN_GIB_TEXT" : 'Purpose: Retribution and initial destruction <br/>Location:  225 - 270 degrees ahead of the sun',

    });
    $translateProvider.preferredLanguage('en');
});

angular.module('starter.controllers', []);
angular.module('starter.factories', []);
