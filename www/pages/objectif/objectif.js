angular.module('objectif.controllers', [])

.controller('ObjectifCtrl', function($scope) {

	$scope.init = function () {

		// TODO récuperer la liste d'objectifs
		

		// for each sur les objectifs pour cocher l'objectif que suit l'utilisateur
		$scope.goals.forEach(function(item) {
			if (item.name == $scope.goal.objectif) {
				item.checked = true;
			}
		});
	}

	$scope.init();

	// Quand on sélectionne un nouvel objectif, on décoche les autres
	$scope.changeObjectif = function(objectif) {
		$scope.user.goal = objectif.name;
		$scope.user.goal_image = objectif.image;
		$scope.user.goal_description = objectif.description;
		$scope.goals.forEach(function(item,index) {
			if (objectif != item) {
				$scope.goals[index].checked = false;
			}else{
				$scope.goals[index].checked = true;
			}
		});
	}

	


});