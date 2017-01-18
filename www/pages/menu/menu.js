angular.module('menu.controllers', [])

.controller('AppCtrl', function($scope, $window, $ionicModal, $timeout, $state,$location,$ionicLoading,userService,bodyUserService,uploadService) {

  $scope.erreurAuth = false;
  $scope.erreurSubscribe = false;
  $scope.erreurFirstInfos = false;
  $scope.file = null;
  // Triggered in the login modal to close it
  $scope.closeModal = function() {
    $scope.modal.remove();
  };

  $scope.deconnexion =function(){
    $state.go($state.current, {}, {reload: true});
    $window.location.reload(true);
    $scope.goToWelcome();
    //$scope.user.isConnected = false;
  };
  

  $scope.goToSuivi = function() {

    $state.go('app.suivi');
  };

  $scope.goToSport = function() {

    $state.go('app.sport');
  };

  $scope.goToWelcome = function(){
    $state.go('app.welcome');

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

  $scope.goToCreationexercise = function() {

    $state.go('app.creationexercise');
  };
  $scope.goToCreationpractise = function() {

    $state.go('app.creationpractise');
  };
  $scope.goToCreationdish = function() {

    $state.go('app.creationdish');
  };
  $scope.goToCreationmeal = function() {

    $state.go('app.creationmeal');
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
      $scope.closeModal();
      $ionicLoading.show();
      userService.authenticate(user)

      .then(function(response) {
        console.log(response);
        if (response.data) {
          $scope.user.mail=user.mail;
          $scope.user.id = response.data;
          $scope.user.isConnected=true;
          $scope.erreurAuth = false;
          console.log($scope.user);
          $ionicLoading.hide();
          $scope.getInfos(response.id);
        }else{
          $scope.erreurAuth = true;
          $ionicLoading.hide();
          $scope.login();
        }
      }, function() {
        $scope.erreurAuth = true;
        $ionicLoading.hide();
        $scope.login();
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
      $scope.closeModal();
      $ionicLoading.show();
      userService.subscribe(newUser).then(function(response) {
        
        if (response.data == -1){
          $scope.subscribeAlreadyExist =true;
          $ionicLoading.hide();
          $scope.subscribe();}
        else if (response.data == 0){
          $scope.erreurSubscribe = true;
          $ionicLoading.hide();
          $scope.subscribe();

        }
        else{
          $scope.user.mail=newUser.mail;
          $scope.user.id = response.data;
          $scope.user.isConnected=true;
          $scope.erreurSubscribe = false;
          console.log("subscribe ok");
          $ionicLoading.hide();
          $scope.getFirstInfos();

        }
      }, function() {
        $scope.erreurSubscribe = true;
        $ionicLoading.hide();
        $scope.subscribe();
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
    infos.picture = "ressources/"+infos.id+".jpg";
    $scope.closeModal();
    $ionicLoading.show();
    if ($scope.file) {
      var req = uploadService.upload($scope.file,$scope.user.id+".jpg");
      if(req.status == 200){
        console.log("ok");
        infos.picture = infos.id+".jpg"
      }
    }
    userService.setInfos(infos)

    .then(function(response) {
        console.log(response);
        if (response.data) {
          $scope.user.firstName = infos.firstName;
          $scope.user.lastName = infos.lastName;
          $scope.user.birthday = infos.birthday;
          $scope.user.sexe = infos.sexe;
          if (infos.size != null) {
            $scope.user.size = infos.size;
          }else{
            $scope.user.size = 0;
          }
          if (infos.weight != null) {
            $scope.user.weight = infos.weight;
          }else{
            $scope.user.weight = 0;
          }
          if (infos.picture) {
            $scope.user.picture = infos.picture;
          }
          $scope.erreurFirstInfos = false;
          $ionicLoading.hide();
          console.log($scope.user);
        }else{
          $scope.erreurFirstInfos = true;
          $ionicLoading.hide();
          $scope.getFirstInfos
        }
      }, function() {
        $scope.erreurFirstInfos = true;
        $ionicLoading.hide();
        $scope.getFirstInfos
      })
  };

  $scope.getInfos = function(id) {
    $ionicLoading.show();
    userService.getInfos($scope.user.id)

    .then(function(response) {
      if (response.data != null) {
        $scope.user.firstName = response.data.firstName;
        $scope.user.lastName = response.data.lastname;
        $scope.user.sexe = response.data.sexe;
        $scope.user.is_coach = response.data.is_coach;
        $scope.user.is_dietitian = response.data.is_dietitian;
        $scope.user.size = response.data.size;
        $scope.user.idGoal = response.data.idGoal;
        $scope.user.picture = response.data.picture;
        if ($scope.user.idGoal){
          $scope.goal.idGoal = $scope.goals[$scope.user.idGoal - 1].idGoal;
          $scope.goal.name = $scope.goals[$scope.user.idGoal - 1].name.toString();
          $scope.goal.description = $scope.goals[$scope.user.idGoal - 1].description.toString();
          $scope.goal.image = $scope.goals[$scope.user.idGoal - 1].image.toString();
        }
        var birthdayDash = response.data.birthday.split(" ");
        var birthdayArray = birthdayDash[0].split("-");
        var birthday = birthdayArray[2]+"/"+birthdayArray[1]+"/"+birthdayArray[0];
        $scope.user.birthday = birthday;
        $ionicLoading.hide();
        bodyUserService.getAllBodyUser($scope.user.id)
        .then(function(response){
          $scope.bodyUsers = response.data;
          $scope.bodyUsers.forEach(function(item){
            item.recordDate = item.recordDate.split(" ")[0];
            $scope.weights.push({date: item.recordDate, weight: item.weight.toString()});
            if (item.graceMasse > 0) {
              $scope.gracemasses.push({date: item.recordDate, gracemass: item.graceMasse.toString()});
            }
          });
          console.log($scope.weights);
        });
      }else{
        // TODO afficher erreur
        $ionicLoading.hide();
      }
    })
  }

  $scope.getBody = function(id) {

  }

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  $scope.setFile = function(file) {
      $scope.file = file;
  };  


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