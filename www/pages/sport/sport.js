angular.module('sport.controllers', [])

.controller('SportCtrl', function($scope) {

	$scope.init = function () {

		

		// for each sur les objectifs pour cocher l'objectif que suit l'utilisateur
		$scope.ListObjectif.forEach(function(item) {
			if (item.name == $scope.user.objectif) {
				item.checked = true;

			}
		});
	}

	$scope.init();

	// Quand on sélectionne un nouvel objectif, on décoche les autres
	$scope.changeObjectif = function(objectif) {
		$scope.user.objectif = objectif.name;
		$scope.ListObjectif.forEach(function(item,index) {
			if (objectif != item) {
				$scope.ListObjectif[index].checked = false;
			}else{
				$scope.ListObjectif[index].checked = true;
			}
		});
	}

	


});