(function () {
  angular.module('footballers').controller('cardCtrl', cardCtrl);

  cardCtrl.$inject = ['authentication', '$http', '$location'];
  function cardCtrl(authentication, $http, $location) {
    var vm = this;
    vm.ran = false;
    vm.storeEvent = function (event) {
      vm.ran = true;
      vm.event = {
        type: event.eventType,
        isNextEvent: event.isNextEvent,
        title: event.eventTitle,
        subtitle: event.eventSubtitle,
        participants: event.eventParticipants,
        details: event.eventDetails,
        _id: event._id
      }
      vm.initialParticipants = vm.event.participants;
      console.log("store ev has run once");
    };
    vm.isFootball = function (eventType) {
      return (eventType == "football");
    };
    vm.editButton = "edit"
    vm.isEditing = false;
    vm.editing = function () {
      if (vm.isEditing == false) {
        vm.isEditing = true;
        vm.editButton = "done";
      }
      else {
        vm.isEditing = false;
        vm.editButton = "edit";
        $http({
          url: '/api/home/' + vm.event._id,
          method: "PUT",
          data: {
            type: vm.event.type,
            isNextEvent: vm.event.isNextEvent,
            subtitle: vm.event.subtitle,
            title: vm.event.title,
            participants: vm.event.participants,
            details: vm.event.details,
          },
          headers: { Authorization: 'Bearer ' + authentication.getToken() }
        }).then(function successCallback(response) {
          console.log('positive event updated ' + response.data);
        }, function errorCallback(response) {
          console.log('event not updated ' + response);
        });
      }
    }
    
    vm.isLoggedIn = authentication.isLoggedIn();


    vm.del = function () {
      $http({
        url: '/api/home/' + vm.event._id,
        method: "DELETE",
        headers: { Authorization: 'Bearer ' + authentication.getToken() }
      }).then(function successCallback(response) {
        console.log('positive event deleted ' + response.data);
        $location.path("/");
      }, function errorCallback(response) {
        console.log('event not deleted ' + response);
      });
    };

    vm.isRegistering = false;
    vm.registerContent = "";


    vm.keypress = function () {
      vm.event.participants = vm.initialParticipants + ", " + vm.registerContent;
    }

    vm.addParticipant = function () {
      $http({
        url: '/api/home/' + vm.event._id + '/addParticipant',
        method: "PUT",
        data: { participant: vm.registerContent }
      }).then(function successCallback(response) {
        console.log('positive participant added ' + response.data);
        $location.path();
        vm.isRegistering = false;
      }, function errorCallback(response) {
        console.log('participant not added ' + response.data);
      });
    }
    vm.register = function () {
      vm.isRegistering = true;
    }
  }
})();