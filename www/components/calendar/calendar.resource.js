angular.module('starter.factories').factory('CalenderResourceFactory', function () {
    console.log("CalendarResourceFactory loaded");

    var toDos = {
        "jan": [
             'Take care of winter/frost protection with leaves/straw',
            'Make garden plan',
            'Order your seeds',
            'Turn compost heap upside down',
            'After snow and rainfall, splitwork can begin',
            'Plant berries',
            'Possibility to take cuttings of blueberries'
        ],
        "feb": [
           'Clean greenhouse , wash flowerpots and seed trays',
            'Chronologically organize seeds on sowing date ',
            'Germinate first early potatoes inside at home',
            'Prune dead branches',
            'Split the rhubarb',
            'Give organic fertilizer to strawberries and fruit trees ',
            'A week before sowing, remove the layer of mulch ',
            'If necessary, straw calcium',
            'Keep feeding little birds and put up nest boxes',
            'Hammer a cottage for solitary bees',
            'As long as it is not freezing: plant bushes of berries, raspberries, rhubarb',
            'A week before sowing, give strawberries and fruit trees organic fertilizer'
        ]
    }


    function getToDos(month) {
        return toDos[month];
    }

    function updateToDos (month){

    }
    return {
        getToDos: function (month) {
            return getToDos(month);
        }
    }

})
