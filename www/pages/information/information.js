angular.module('information.controllers', [])

.controller('InformationCtrl', function($scope,$rootScope,$ionicLoading,bodyUserService) {
	$scope.modif = {weight:'', gracemass:''};
	$scope.getInfos = function () {
		bodyUserService.getBodyUser($scope.user.id).then(function(response){
			console.log(response);
			$scope.bodyUser.weight = response.data.weight;
			$scope.bodyUser.gracemass = response.data.graceMasse;
			$ionicLoading.hide();
		}, function(){
			$ionicLoading.hide();
		})

	};

	$ionicLoading.show();
	$scope.getInfos();


	$scope.doInformationModification = function(modif) {
    $ionicLoading.show();
    bodyUserService.setBodyUser({idUser: $scope.user.id, weight: modif.weight, gracemass: modif.gracemass})

    .then(function(response) {
        console.log(response);
        if (response.data) {
          $scope.bodyUser.weight = modif.weight;
          $scope.bodyUser.gracemass = modif.gracemass;
          var date = new Date().toISOString().substring(0,10);
          $scope.weights.push({date: date,weight: modif.weight});
          $rootScope.updateWeight = true;
          if (modif.gracemass > 0) {
	          $scope.gracemasses.push({date: date,gracemass: modif.gracemass});
	          $rootScope.updateGraceMass = true;
	      }
          $scope.modif = {poids:'', size:'', gracemass:''};
          $ionicLoading.hide();
        }else{
          // TODO afficher erreur
          $ionicLoading.hide();
        }
	}, function() {
		// TODO afficher erreur
		$ionicLoading.hide();
	})
  };


});