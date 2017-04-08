angular.module('starter.controllers').controller('GardenCtrl', function($scope,$window,GardenResourceFactory) {

var vm = this;

vm.plants = GardenResourceFactory.getPlants();

var width = window.innerWidth*0.95;
var gardenWidth = width;
var height = window.innerHeight*0.3;
var gardenBlocks = [];
 var stage = new Konva.Stage({
      container: 'garden',
      width: width,
      height: height
    });

    var layer = new Konva.Layer();

    var rect = new Konva.Rect({
      x: 0,
      y: 0,
      width: gardenWidth,
      height: height,
      fill: 'transparent',
      stroke: 'black',
      strokeWidth: 2
    });

    // add the shape to the layer
    layer.add(rect);

    addGardenBlocks(layer,gardenWidth,height,3)

    // add the layer to the stage
    stage.add(layer);

    function addGardenBlocks(layer,widthToSplice,heightToSplice,blockAmount){
     var blockWidth = widthToSplice/blockAmount;
     var blockHeight = heightToSplice/blockAmount;
    while(blockHeight > blockWidth){
        blockHeight = blockHeight/2;
    };
    var amountVertical = Math.floor(heightToSplice/blockHeight);

    for( var y = 0; y <amountVertical; y++){
        for(var x =0; x < blockAmount; x++){
            var rect = new Konva.Rect({
                x: blockWidth * x,
                y: blockHeight * y,
                width: blockWidth,
                height: blockHeight,
                fill: 'transparent',
                stroke: 'black',
                strokeWidth: 2
            });
            gardenBlocks.push(rect);
            layer.add(rect);
        }
    }

    }


})
