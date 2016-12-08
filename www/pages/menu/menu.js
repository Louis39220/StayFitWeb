angular.module('menu.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state,$location,userService) {

  $scope.erreurAuth = false;
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

  // Open the login modal
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

  // Perform the login action when the user submits the login form
  $scope.doLogin = function(user) {
      var retour = userService.authenticate(user)

      retour.then(function(response) {
        console.log(response);
        if (response.data) {
          $scope.user.mail=user.mail;
          $scope.user.isConnected=true;
          $scope.erreurAuth = false;
          $scope.closeModal();
        }else{
          $scope.erreurAuth = true;
        }
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
      var retour = userService.suscribe(newUser)

      retour.then(function(response) {
        if (response.data == "ACCEPTED") {
          $scope.user.mail=newUser.mail;
          $scope.user.isConnected=true;
          console.log("suscribe ok");
          $scope.closeModal();
        }else{
          // TODO afficher erreur
        }
      })
    }else{
      // TODO afficher erreur
    }    
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  })
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