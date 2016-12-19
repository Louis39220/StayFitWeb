angular.module('objectif.controllers', [])

.controller('ObjectifCtrl', function($scope,$ionicLoading,goalService) {

	$scope.init = function () {

		$ionicLoading.show();
		// TODO récuperer la liste d'objectifs
		goalService.getGoals()
		.then(function(response){
			$scope.goals = response.data;
			console.log(response);
			// for each sur les objectifs pour cocher l'objectif que suit l'utilisateur
			$scope.goals.forEach(function(item) {
				if (item.idGoal == $scope.user.idgoal) {
					item.checked = true;
				}
			});
			$ionicLoading.hide();
		})
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