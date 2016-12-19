angular.module('objectif.controllers', [])

.controller('ObjectifCtrl', function($scope,$ionicLoading,goalService,userService) {

	$scope.init = function () {
			// for each sur les objectifs pour cocher l'objectif que suit l'utilisateur
			$scope.goals.forEach(function(item) {
				if (item.idGoal == $scope.user.idgoal) {
					item.checked = true;
				}else{
					item.checked = false;
				}
			});
	}

	$scope.init();

	// Quand on sélectionne un nouvel objectif, on décoche les autres
	$scope.changeObjectif = function(objectif) {
		$ionicLoading.show();
		console.log(objectif);
		$scope.goal = objectif;
		$scope.user.idgoal = objectif.idGoal;
		userService.setGoal($scope.user).then(function(response){
			$scope.goals.forEach(function(item,index) {
				if (objectif != item) {
					$scope.goals[index].checked = false;
				}else{
					$scope.goals[index].checked = true;
				}
			});
			$ionicLoading.hide();
		}, function(response){
			$ionicLoading.hide();
		});
		
	}

	


});