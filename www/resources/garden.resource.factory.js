angular.module('starter.factories').factory('GardenResourceFactory', function (lodash) {
    console.log("GardenResourceFactory loaded");

    var plants = [
        {
            "name":   "VEG_POTATO",
            "id": 1,
            "height" : 40,
            "width": 60,
            "plant": [3, 4, 5],
            "harvest" : [7, 8, 9, 10, 11],
            "image": 'Aardappelen',
            "notNext": [59, 53, 31, 61, 21, 19, 50, 67, 68],
             
            "goodNext":  [17, 11, 25, 57]
},
        {
            "name": "VEG_STRAWBERRY",
            "id": 2,
            "height" : 30,
            "width": 60,
            "plant": [9],
            "harvest": [7, 8, 9, 10],
            "image": "Aardbeien",
            "notNext": [13, 21, 12, 9, 46, 56, 66],
            "goodNext": [42, 33, 61, 59, 38, 39, 24, 54, 25] 
},

        {
            "name": "VEG_JERUSALEM ARTICHOKES",
            "id": 3,
            "height" : 30,
            "width": 50,
            "plant": [3, 4],
            "harvest": [1, 2, 3, 11, 12, 13],
             
            "image": "Aardperen",
},
        {
            "name": "VEG_ENDIVE",
            "id": 4,
            "height" : 35,
            "width": 35,
            "plant": [7, 8],
             
            "sow": [8, 9],
             
            "harvest": [10, 11, 12, 13],
             
            "image": "Andijvie",
            "goodNext": [63, 59, 38, 39],
             
},
        {
            "name": "VEG_ASPARAGUS",
            "id": 5,
            "height" : 30,
            "width": 100,
            "plant": [3, 4],
             
            "harvest":  [4, 5, 6, 7],
             
            "image": "Asperges",
            "goodNext": [59, 33],
             
}
,
        {
            "name": "VEG_EGGPLANT",
            "id": 6,
            "height" : 60,
            "width": 60,
            "plant": [5, 6, 7],
             
            "sow":  [3, 4],
             
            "harvest":  [8, 9, 10],
             
            "prick": 4,
             
            "image": "Aubergine",
            "goodNext": [11, 60],
             
            "info": "3, 4, Sowing at home",
            //"info" : "5, Planting in serre"
},

        {
            "name": "VEG_PICKLES",
            "id": 7,
            "height" : 50,
            "width": 150,
            "plant": [6, 7],
             
            "sow": [4, 5],
             
            "harvest":  [8, 9, 10],
             
            "image": "Augurken",
            "info": "4, 5, Sowing in serre"
},
  {
            "name": "VEG_BASIL",
            "id": 8,
            "height" : 20,
            "width": 20,
            "plant": [6, 7, 8, 9],
             
            "sow": [5, 6, 7, 8],
              
            "harvest": [7, 8, 9, 10],
             
            "image": "Basilicum",
            "goodNext": [5, 19, 50],
             
            "info": "5, 9 Sowing and planting In serre"
                //"info" : "5, Sowing at home"
},
  {
            "name": "VEG_CAULIFLOWER",
            "id": 9,
            "height" : 60,
            "width": 60,
            "plant": [3, 4, 5, 6, 7],
             
            "sow": [2, 3, 4, 5, 10, 11],
             
            "harvest": [7, 8, 9, 10, 11],
             
            "image": "Bloemkool",
            "notNext": [54, 59, 1, 17],
             
            "goodNext": [11, 60, 19, 50, 16],
             
            "info": "3, 4, Sowing in serre"
                //"info" : "2, Sowing at home"
}
,
  {
            "name": "VEG_KALE",
            "id": 10,
            "height" : 60,
            "width": 60,
            "plant": [7, 8],
             
            "sow": [5, 6],
             
            "harvest": [1, 2, 3, 10, 11, 12, 13],
             
            "image": "Boerenkool",
},

  {
            "name": "VEG_BEANS",
            "id": 11,
            "height" : 10,
            "width": 50,
            "plant": [6],
             
            "sow": [4, 5, 6, 7, 8],
             
            "harvest": [8, 9, 10, 11],
             
            "image": "Bonen",
            "notNext": [63, 61, 52, 25],
            "goodNext": [50, 19, 67, 68, 9, 24, 34, 1],
             
            "info": "4, Sowing in serre"
},

  {
            "name": "VEG_BROCCOLI",
            "id": 12,
            "height" : 40,
            "width": 60,
            "plant": [4, 5, 6, 7],
             
            "sow": [2, 3, 4, 5, 6, 7],
             
            "harvest": [7, 8, 9, 10, 11],
             
            "prick": [3, 4],
             
            "image": "Broccoli",
            "goodNext": [19, 50, 16],
             
            "notNext": [2, 59],
             
            "info": "3, 4, Sowing in serre"
                //"info" : "2, Sowing at home"
},

  {
            "name": "VEG_CHINESE CABBAGE",
            "id": 13,
            "height" : 30,
            "width": 40,
            "plant": [9],
            "sow": [8, 9],
             
            "harvest": [10, 11, 12],
             
            "image": "Chinese kool",
},

  {
            "name": "VEG_ZUCCHINI",
            "id": 14,
            "height" : 100,
            "width": 100,
            "plant": [6, 7],
             
            "sow": [4, 5, 6, 7],
             
            "harvest": [8, 9, 10, 11],
             
            "image": "Courgette",
            "notNext": [21, 1],
             
            "goodNext": [61, 26, 24, 34],
             
},

  {
            "name": "VEG_DAIKON",
            "id": 15,
            "height" : 15,
            "width": 30,
            "sow": [6, 7, 8],
            "harvest": [10, 11, 12],
             
            "image": "Daikon",
},

  {
            "name": "VEG_DILL",
            "id": 16,
            "height" : 40,
            "width": 40,
            "plant": [4, 5, 6, 7],
             
            "sow": [4, 5, 6, 7, 8],
             
            "harvest": [8, 9, 10],
             
            "prick": [3, 4],
             
            "image": "Dille",
            "goodNext": [67, 68, 38, 39, 27, 44, 63, 50, 19]
},
  {
            "name": "VEG_PEAS",
            "id": 17,
            "height" : 5,
            "width": 50,
            "plant": [3, 4],
            "sow": [2, 3, 4],
             
            "harvest": [7, 8],
             
            "image": "Erwten",
            "notNext": [61, 25, 1, 59, 25],
             
            "goodNext": [60, 11, 67, 68, 38, 39, 44, 27, 63, 50, 19],
             
},
  {
            "name": "VEG_RASPBERRIES",
            "id": 18,
            "height" : 20,
            "width": 100,
            "plant": [1, 2, 3, 11, 12, 13],
             
            "harvest": [7, 8, 9, 10],
            "image": "Frambozen",
            "notNext": [1],
            "goodNext": [25],
             
},

  {
            "name": "VEG_GREEN CELERY",
            "id": 19,
            "height" : 30,
            "width": 30,
            "plant": [5, 6, 7],
             
            "sow": [3, 4, 5],
             
            "harvest": [10, 11, 12, 13],
             
            "image": "Groene selder",
            "info": "3, 4, Sowing at home",
            "prick": [4],
             
            "goodNext": [38, 39, 13, 46, 56, 66, 8],
             
},
  {
            "name": "VEG_CHICORY",
            "id": 20,
            "height" : 25,
            "width": 35,
            "plant": [8, 9],
             
            "sow": [7, 8],
             
            "harvest": [10, 11, 12, 13],
             
            "image": "Groenlof",
},

  {
            "name": "VEG_CUCUMBER",
            "id": 21,
            "height" : 50,
            "width": 150,
            "plant": [5, 6, 7],
             
            "sow": [4, 5, 6],
             
            "harvest": [8, 9, 10],
             
            "image": "Komkommer",
            "goodNext": [16, 25, 50, 19, 63],
             
            "notNext": [1, 22, 42, 43],
             
            "info": "4, 5, 7, Sowing in serre"
                //"info" : "7, Planting in open ground"
},
  {
            "name": "VEG_KOHLRABI",
            "id": 22,
            "height" : 30,
            "width": 30,
            "plant": [6, 7, 8],
             
            "sow": [4, 5, 6, 7, 8],
             
            "harvest": [8, 9, 10, 11],
             
            "image": "Koolrabi",
            "goodNext": [38, 39, 19, 50, 24, 34, 17, 1, 42, 54],
             
            "notNext": [21],
             
},

  {
            "name": "VEG_CORIANDER",
            "id": 23,
            "height" : 30,
            "width": 30,
            "plant": [4, 5, 6, 7],
             
            "sow":  [4, 5, 6, 7],
             
            "harvest": [9, 10, 11],
             
            "image": "Koriander",
},

  {
            "name": "VEG_LETTUCE",
            "id": 24,
            "height" : 25,
            "width": 30,
            "plant": [2, 3, 4, 5, 6, 7, 8, 9, 10],
             
            "sow": [2, 3, 4, 5, 6, 7, 8, 9, 10],
             
            "harvest": [5, 6, 7, 8, 9, 10, 11, 12],
             
            "image": "Bloemkool",
            "notNext": [33],
             
            "goodNext": [16, 63, 67, 68, 27, 44, 25],
             
            "info": "3, Sowing and planting in serre"
                //"info" : "2, 3, Sowing at home"
},
  {
            "name": "VEG_GARLIC",
            "id": 25,
            "height" : 15,
            "width": 25,
            "plant": [10],
             
            "harvest": [8],
             
            "image": "Knoflook",
            "notNext": [60, 11, 46, 56, 66, 13],
             
},
  {
            "name": "VEG_CORN",
            "id": 26,
            "height" : 20,
            "width": 60,
            "plant": [6],
            "sow": [5, 6],
             
            "harvest": [9, 10],
             
            "image": "Maïs",
},

  {
            "name": "VEG_TURNIPS",
            "id": 27,
            "height" : 35,
             
            "width": 35,
            "plant": [3, 4],
             
            "sow": [3, 4],
             
            "harvest": [5, 6],
             
            "image": "Meirapen",
            "goodNext": [11, 60, 67, 68, 33],
             
},

  {
            "name": "VEG_PAK CHOI",
            "id": 28,
            "height" : 30,
            "width": 40,
            "plant": [9],
             
            "sow": [8, 9],
             
            "harvest": [10, 11, 12],
             
            "image": "Paksoi",
},

  {
            "name": "VEG_BELL PEPPER",
            "id": 29,
            "height" : 60,
            "width": 60,
            "plant": [5, 6, 7],
             
            "sow": [3],
             
            "harvest": [8, 9, 10, 11],
             
            "image": "Paprika",
            "info": "5, 6, Planting in serre",
            //"info" : "3, Sowing at home"
            //"info" : "6, Planting in open ground"
},
  {
            "name": "VEG_PARSNIP",
            "id": 30,
            "height" : 15,
            "width": 30,
            "sow": [4, 5, 6, 7],
             
            "harvest": [10, 11, 12],
             
            "image": "Pastinaak",
            "goodNext": [61],
             
},

  {
            "name": "VEG_SUMMER SQUASH",
            "id": 31,
            "height" : 100,
            "width": 100,
            "plant": [6, 7],
             
            "sow": [4, 5, 6, 7],
             
            "harvest": [7, 8, 9, 10, 11],
             
            "image": "Patissons",
            "notNext": [1],
            "goodNext": [24, 34, 17, 42],
             
            "info": "4, 5, Sowing in serre"
},

  {
            "name": "VEG_PEPPERS",
            "id": 32,
            "height" : 60,
            "width": 60,
            "plant": [5, 6, 7],
             
            "sow": [3],
             
            "harvest": [8, 9, 10, 11],
             
            "image": "Pepers",
            "goodNext": [8, 25, 38, 39, 59],
             
            "info": "5, 6, Planting in serre"
                //"info" : "3, Sowing at home"
                //"info" : "6, Planting in open ground"
                 
        },

  {
            "name": "VEG_PARSLEY",
            "id": 33,
            "height" : 15,
            "width": 25,
            "plant": [9, 10],
             
            "sow": [3, 4, 5, 6, 7, 8, 9],
             
            "harvest": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
             
            "image": "Peterselie",
            "info": "9, 10, Sowing and planting in serre" 
        },

  {
            "name": "VEG_LOOSE-LEAVED LETTUCE",
            "id": 34,
            "height" : 5,
            "width": 15,
            "sow": [2, 3, 4, 5, 6, 7, 8, 9, 10],
             
            "harvest": [4, 5, 6, 7, 8, 9, 10, 11, 12],
             
            "image": "Pluksla",
            "goodNext": [16, 63, 67, 68, 27, 44, 25],
             
            "info": "2, 3, 10, Sowing in cold frame or tunnel"
                //"info" : "3, Sowing in open ground"
                 
        },

  {
            "name": "VEG_PUMPKINS",
            "id": 35,
            "height" : 150,
            "width": 150,
            "plant": [6, 7],
             
            "sow": [4, 5, 6],
             
            "harvest": [10, 11],
             
            "image": "Pompoenen",
            "notNext": [1],
             
            "goodNext": [24, 34, 41],
             
            "info": "4, 5, Sowing in serre" 
        },

  {
            "name": "VEG_WINTER PURSLANE",
            "id": 36,
            "height" : 5,
            "width": 15,
            "sow": [9, 10],
             
            "harvest": [1, 2, 3, 11, 12, 13],
            "image": "Winterpostelein",
             
        },

  {
            "name": "VEG_SUMMER PURSLANE",
            "id": 37,
            "height" : 3,
            "width": 10,
            "sow": [6, 7, 8, 9],
             
            "harvest": [7, 8, 9, 10],
             
            "image": "Zomerpostelein",
             
        },

  {
            "name": "VEG_WINTER LEEKS",
            "id": 38,
            "height" : 15,
            "width": 40,
            "plant": [7, 8, 9],
             
            "sow": [4],
             
            "harvest": [1, 2, 3, 12, 13],
             
            "image": "Winterprei",
            "goodNext": [11, 60, 67, 68, 17, 44, 27],
             
            "notNext": [11, 60, 17, 45, 42],
             
            "info": "7, Planting after 15th" 
        },

  {
            "name": "VEG_SUMMER LEEKS",
            "id": 39,
            "height" : 10,
            "width": 25,
            "plant": [4, 5],
             
            "sow": [2, 3],
             
            "harvest": [7, 8, 9],
             
            "image": "Zomerprei",
            "goodNext": [11, 60, 67, 68, 17, 44, 27],
             
            "notNext": [11, 60, 17, 45, 42],
             
            "info": "2, 3, At home" 
        },
  {
            "name": "VEG_RHUBARB",
            "id": 40,
            "height" : 100,
            "width": 100,
            "plant": [2, 3],
              
            "harvest": [4, 5, 6, 7],
              
            "image": "Rabarber",
            "goodNext": [24, 34, 54],
              
        },
  {
            "name": "VEG_RADICCHIO",
            "id": 41,
             
            "height" : 25,
            "width": 35,
            "plant": [8, 9],
             
            "sow": [7, 8],
             
            "harvest": [10, 11, 12],
             
            "image": "Radicchio",
            "info": "Sow after June the 15th" 
        },
  {
            "name": "VEG_RADISHES",
            "id": 42,
             
            "height" : 3,
            "width": 10,
             
            "sow": [2, 3, 4, 5, 8, 9, 10],
             
            "harvest": [4, 5, 6, 7, 8, 9, 10, 11],
             
            "image": "Radijzen",
            "goodNext": [33, 22, 24, 34, 33, 17, 35, 54, 2, 59, 67, 68, 21],
             
            "info": "2, Sowing in cold frame or tunnel"
                //"info" : "2, Sowing in serre"
                 
        },

  {
            "name": "VEG_BLACK RADISH",
            "id": 43,
             
            "height" : 15,
            "width": 30,
             
            "sow": [7, 8, 9],
             
            "harvest": [10, 11, 12],
             
            "image": "Rammenas",
            "goodNext": [33],
              
        },
  {
            "name": "VEG_TURNIP",
            "id": 44,
             
            "height" : 10,
            "width": 25,
             
            "sow": [4, 8, 9],
             
            "harvest": [6, 7, 10, 11],
             
            "image": "Rapen",
            "goodNext": [11, 60, 67, 68, 33],
              
        },

  {
            "name": "VEG_BEETROOT",
            "id": 45,
             
            "height" : 10,
            "width": 25,
             
            "sow": [3, 4, 5, 6, 7, 8],
             
            "plant": [4],
             
            "harvest": [7, 8, 9, 10, 11],
             
            "image": "Rode bieten",
            "goodNext": [61, 16, 50, 19, 22, 25],
             
            "info": "3, Sowing in serre" 
        },

  {
            "name": "VEG_RED CABBAGE",
            "id": 46,
             
            "height" : 60,
            "width": 60,
             
            "sow": [3, 4],
             
            "plant": [6, 7],
             
            "harvest": [11, 12],
             
            "image": "Rode kool",
            "info": "3, 4, Sowing in cold frame or tunnel" 
        },

  {
            "name": "VEG_ARUGULA",
            "id": 47,
             
            "height" : 5,
            "width": 15,
            "sow": [2, 3, 4, 5, 6, 7, 8, 9, 10],
             
            "harvest": [4, 5, 6, 7, 8, 9, 10, 11, 12],
             
            "image": "Rucola",
            "info": "2, 3, 10, Sowing in cold frame or tunnel"
                //"info" : "3, Sowing in open ground"
                 
        },

  {
            "name": "VEG_SAVOY",
            "id": 48,
             
            "height" : 60,
            "width": 60,
            "sow": [4, 5],
             
            "plant": [7, 8],
             
            "harvest": [1, 2, 3, 12, 13],
             
            "image": "Savooi",
            "info": "4, Sowing in cold frame or tunnel" 
        },

  {
            "name": "VEG_SALSIFY",
            "id": 49,
             
            "height" : 10,
            "width": 25,
            "sow": [4, 5],
             
            "harvest": [1, 2, 3, 11, 12, 13],
             
            "image": "Savooi",
            "goodNext": [22, 38, 39, 61],
             
            "inf,o": "4, Sowing in cold frame or tunnel" 
        },

  {
            "name": "VEG_CELERY",
            "id": 50,
             
            "height" : 30,
            "width": 30,
            "sow": [4, 5, 6],
             
            "plant": [6, 7],
             
            "harvest": [10, 11],
             
            "image": "Bleekselderij",
            "goodNext": [38, 39, 13, 46, 56, 66, 8],
             
            "notNext": [30, 1, 33, 24, 34],
             
            "info": "4, Sowing at home"
                //"info" : "4, 5, Sowing in serre"
                 
        },

  {
            "name": "VEG_CELERIAC",
            "id": 51,
             
            "height" : 40,
            "width": 50,
            "sow": [2, 3, 4],
             
            "plant": [6, 7, 8],
             
            "harvest": [11],
             
            "prick": [4],
             
            "image": "Knolselder",
            "info": "2, 3, Sowing at home"
                //"info" : "4, 5, Sowing in serre"
                 
        },

  {
            "name": "VEG_SHALLOTS",
            "id": 52,
            "height" : 15,
            "width": 25,
            "plant": [3, 4],
            "harvest": [8, 9],
             
            "image": "Sjalotten",
             
        },

  {
            "name": "VEG_SPAGHETTI SQUASH",
            "id": 53,
             
            "height" : 100,
            "width": 100,
            "sow": [4, 5, 6, 7],
             
            "plant": [6, 7],
             
            "harvest": [9, 10],
             
            "image": "Spaghettipompoen",
            "info": "4, 5, Sowing in serre" 
        },

  {
            "name": "VEG_SPINACH",
            "id": 54,
             
            "height" : 10,
            "width": 20,
            "sow": [2, 3, 4, 5, 6, 7, 8, 9, 10],
             
            "harvest": [5, 6, 7, 8, 9, 10, 11, 12],
             
            "image": "Spinazie",
            "goodNext": [19, 50, 19, 50, 1, 40, 2, 59] ,
            "notNext": [42, 43, 45],
             
            "info": "2, 3, Sowing in cold frame or tunnel" 
        },

  {
            "name": "VEG_NEW ZEALAND SPINACH",
            "id": 55,
             
            "height" : 80,
            "width": 80,
            "sow": [5,
            6,
            7],
             
            "harvest": [8,
            9,
            10,
            11,
            12],
             
            "image": "Nieuw Zeelandse Spinazie",
            "goodNext": [19,
            50],
              
        },
  {
            "name": "VEG_CABBAGE",
            "id": 56,
             
            "height" : 40,
            "width": 40,
            "sow": [2, 3, 4, 5, 6],
            "plant": [4, 5, 6, 7],
             
            "harvest": [7, 8, 9, 10, 11],
             
            "prick": [3, 4],
             
            "image": "Spitskool",
            "info": "2, Sowing at home"
                //"info" : "3, 4, Sowing in serre"
                 
        },
  {
            "name": "VEG_SPROUT",
            "id": 57,
             
            "height" : 60,
            "width": 60,
            "sow": [3, 4],
            "plant": [6, 7],
             
            "harvest": [1, 2, 11, 12, 13],
             
            "image": "Spruiten",
            "info": "3, 4, Sowing in cold frame or tunnel" 
        },

  {
            "name": "VEG_WELSH ONION",
            "id": 58,
             
            "height" : 10,
            "width": 30,
            "sow": [4, 5, 9, 10, 11],
             
            "harvest": [6, 7, 8, 9, 10, 11],
             
            "image": "Stengelui",
             
        },

  {
            "name": "VEG_TOMATOES",
            "id": 59,
             
            "height" : 60,
            "width": 60,
            "sow": [3, 4, 5],
             
            "plant": [4, 5, 6, 7],
             
            "harvest": [8, 9, 10, 11, 12],
             
            "prick": [4, 5, 6],
             
            "image": "Tomaten",
            "notNext": [63, 22, 1, 17, 30, 61, 16, 9, 12, 7],
             
            "goodNext": [33, 8, 25, 54, 42, 32, 5],
             
            "info": "3, 4, Sowing at home"
                //"info" : "4, 5, 6, 7, Sowing in serre"
                //"info" : "6, 7, Sowing in open ground"
                 
        },

  {
            "name": "VEG_BROAD BEANS",
            "id": 60,
             
            "height" : 10,
            "width": 50,
            "sow": [2, 3, 4],
             
            "plant": [3, 4],
             
            "harvest": [7, 8],
             
            "image": "Tuinbonen",
            "goodNext": [16],
             
            "info": "2, Sowing in serre" 
        },

  {
            "name": "VEG_ONIONS",
            "id": 61,
             
            "height" : 10,
            "width": 25,
            "plant": [3, 4],
             
            "harvest": [8, 9],
             
            "image": "Uien",
            "notNext": [60, 11, 46, 56, 66, 13],
             
            "goodNext": [67, 68, 45, 59, 33],
              
        },

  {
            "name": "VEG_DANDELION SALAD",
            "id": 62,
             
            "height" : 4,
            "width": 15,
            "sow": [2, 9, 10, 11],
             
            "harvest": [1, 2, 3, 11, 12, 13],
             
            "image": "Veldsla",
            "info": "2, 10, 11, Sowing in serre" 
        },

  {
            "name": "VEG_FENNEL",
            "id": 63,
             
            "height" : 20,
            "width": 45,
            "sow": [3, 7, 8],
             
            "plant": [4, 8, 9],
             
            "harvest": [7, 10, 11, 12],
             
            "image": "Venkel",
            "notNext": [11, 60],
             
            "goodNext": [21, 4, 17, 24, 34],
            "info": "3, Sowing at home" 
        },

  {
            "name": "VEG_POTHERBS",
            "id": 64,
             
            "height" : 30,
            "width": 30,
             
            "sow": [4, 5, 6, 7, 8, 9],
             
            "harvest": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13],
             
            "image": "Warmoes",
            "goodNext": [45, 42],
              
        },

  {
            "name": "VEG_CHICORY",
            "id": 65,
             
            "height" : 40,
            "width": 40,
            "sow": [6, 7],
             
            "harvest": [1, 2, 13],
             
            "image": "Witlof",
            "goodNext": [63, 24, 34, 59],
              
        },

  {
            "name": "VEG_WHITE CABBAGE",
            "id": 66,
             
            "height" : 60,
            "width": 60,
            "sow": [2, 3, 4, 5, 6],
             
            "plant": [4, 5, 6, 7],
             
            "harvest": [7, 8, 9, 10, 11],
             
            "prick": [3, 4],
             
            "image": "Witte kool",
            "notNext": [],
            "info": "2, Sowing at home"
                //"info" : "3, 4, Sowing in serre"
                 
        },

  {
            "name": "VEG_WINTER CARROTS",
            "id": 67,
             
            "height" : 4,
            "width": 30,
            "sow": [4, 5, 6, 7],
             
            "harvest": [10, 11, 12],
             
            "image": "Winterwortel",
            "goodNext": [24, 34, 17, 25],
             
            "notNext": [45] 
        } ,

        {
            "name": "VEG_SUMMER CARROTS",
            "id": 68,
             
            "height" : 4,
            "width": 20,
            "sow": [2, 3, 4, 5, 6, 7, 8],
             
            "harvest": [8, 9, 10, 11, 12],
             
            "image": "Zomerwortel",
            "goodNext": [24, 34, 17, 25],
             
            "notNext": [45],
            "info": "2, 3, Sowing in cold frame or tunnel" 
        }

    ];

    function getPlants () {
        return plants;
    }

    function getPlant(id){
        return lodash.filter(plants,{'id':id} )[0];
    }

    function getPlantsHarvest (month){
        return lodash.filter(plants,function(plant){
            if(plant.harvest){
                return plant.harvest.includes(month);
            } else {
                return false;
            }
        })
    }

    function getPlantsSow (month){
        return lodash.filter(plants,function(plant){
            if(plant.sow){
                return plant.sow.includes(month);
            } else {
                return false;
            }
        })
    }

    function getPlantsPlant (month){
        return lodash.filter(plants,function(plant){
            if(plant.plant){
                return plant.plant.includes(month);
            } else {
                return false;
            }
        })
    }

    function getPlantsPrick (month){
        return lodash.filter(plants,function(plant){
            if(plant.prick){
                return plant.prick.includes(month);
            } else {
                return false;
            }
        })
    }

    return {
        getPlants: function () {
            return getPlants();
        },
        getPlant: function (id) {
            return getPlant(id);
        },
        getPlantsHarvest (month){
            return getPlantsHarvest(month);
        }
        ,
        getPlantsSow (month){
            return getPlantsSow(month);
        }
        ,
        getPlantsPlant (month){
            return getPlantsPlant(month);
        }
        ,
        getPlantsPrick (month){
            return getPlantsPrick(month);
        }
    }

});
