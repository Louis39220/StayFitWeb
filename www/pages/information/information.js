angular.module('information.controllers', [])

.controller('InformationCtrl', function($scope,$ionicLoading,bodyUserService) {
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