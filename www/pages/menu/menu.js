angular.module('menu.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state,$location,userService) {

  $scope.erreurAuth = false;
  $scope.erreurSubscribe = false;
  $scope.erreurFirstInfos = false;
  // Triggered in the login modal to close it
  $scope.closeModal = function() {
    $scope.modal.remove();
  };

  $scope.goToSuivi = function() {

    $state.go('app.suivi');
  };

  $scope.goToSport = function() {

    $state.go('app.sport');
  };

  $scope.goToNutrition = function() {

    $state.go('app.nutrition');
  };

  $scope.goToProfil = function() {

    $state.go('app.profil');
  };

  $scope.goToInfos = function() {

    $state.go('app.information');
  };

  $scope.goToObjectif = function() {

    $state.go('app.objectif');
  };

  $scope.goToContact = function() {

    console.log();
    $state.go('app.contact');

  };

  $scope.goToAbout = function() {

    $state.go('app.about');
  };

  $scope.login = function() {
    if ($scope.modal != null) {
      $scope.modal.remove();
    }
    $ionicModal.fromTemplateUrl('pages/menu/login.html', {
    scope: $scope
    }).then(function(modal) {
      if ($scope.modal != null) $scope.modal.remove();
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.doLogin = function(user) {
      userService.authenticate(user)

      .then(function(response) {
        console.log(response);
        if (response.data) {
          $scope.user.mail=user.mail;
          $scope.user.id = response.data;
          $scope.user.isConnected=true;
          $scope.erreurAuth = false;
          console.log($scope.user);
          $scope.getInfos(response.id);
          $scope.closeModal();
        }else{
          $scope.erreurAuth = true;
        }
      }, function() {
        $scope.erreurAuth = true;
      })   
  };

  $scope.subscribe = function() {
    if ($scope.modal != null) {
      $scope.modal.remove();
    }
    $ionicModal.fromTemplateUrl('pages/menu/subscribe.html', {
    scope: $scope
    }).then(function(modal) {
      if ($scope.modal != null) $scope.modal.remove();
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.doSubscribe = function(newUser) {
    if (newUser.password == newUser.confirmPassword) {
      userService.suscribe(newUser).then(function(response) {
        if (response.data != 0) {
          $scope.user.mail=newUser.mail;
          $scope.user.id = response.data;
          $scope.user.isConnected=true;
          $scope.erreurSubscribe = false;
          console.log("suscribe ok");
          $scope.closeModal();
          $scope.getFirstInfos();
        }else{
          $scope.erreurSubscribe = true;
        }
      }, function() {
        $scope.erreurSubscribe = true;
      })
    }   
  };

  $scope.getFirstInfos = function() {
    if ($scope.modal != null) {
      $scope.modal.remove();
    }
    $ionicModal.fromTemplateUrl('pages/menu/firstInfos.html', {
    scope: $scope
    }).then(function(modal) {
      if ($scope.modal != null) $scope.modal.remove();
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.setFirstInfos = function(infos) {
    infos.id = $scope.user.id;
    userService.setInfos(infos)

    .then(function(response) {
        console.log(response);
        if (response.data) {
          $scope.user.firstName = infos.firstName;
          $scope.user.lastName = infos.lastName;
          $scope.user.birthday = infos.birthday;
          $scope.user.sexe = infos.sexe;
          if (infos.size != null) $scope.user.size = infos.size;
          if (infos.weight != null) $scope.user.weight = infos.weight;
          $scope.erreurFirstInfos = false;
          console.log($scope.user);
          $scope.closeModal();
        }else{
          $scope.erreurFirstInfos = true;
        }
      }, function() {
        $scope.erreurFirstInfos = true;
      })
  };

  $scope.getInfos = function(id) {
    userService.getInfos($scope.user.id)

    .then(function(response) {
      console.log(response);
      if (response.data != null) {
        $scope.user.firstName = response.data.firstName;
        $scope.user.lastName = response.data.lastName;
        $scope.user.sexe = response.data.sexe;
        $scope.user.is_coach = response.data.is_coach;
        $scope.user.is_dietitian = response.data.is_dietitian;
        $scope.user.size = response.data.size;
        var birthdayDash = response.data.birthday.split(" ");
        var birthdayArray = birthdayDash[0].split("-");
        var birthday = birthdayArray[2]+"/"+birthdayArray[1]+"/"+birthdayArray[0];
        $scope.user.birthday = birthday;
      }else{
        // TODO afficher erreur
      }
    })
  }

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });



})


.directive('vEquals', ['$parse', function vEqualsDirective($parse) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$validators.vEquals = function(value) {
                return value === $parse(attrs.vEquals)(scope);
            }
        }
    };
}]);