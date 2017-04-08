angular.module('starter.controllers').controller('CalendarCtrl', function ($scope, CalenderResourceFactory) {
    var vm = this;
    vm.toDos = CalenderResourceFactory.getToDos("feb");
    console.log(vm.toDos);
    vm.date = new Date();
    vm.events = [];
    vm.select = function (selectedTime, events, disabled) {
        vm.date = selectedTime;
    };
    vm.setEvent = function (toDo) {
        vm.events.push({
            title: toDo,
        });
    }
})
