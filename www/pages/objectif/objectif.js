angular.module('objectif.controllers', [])

.controller('ObjectifCtrl', function($scope,$ionicLoading,goalService,userService) {

	$scope.init = function () {
			// for each sur les objectifs pour cocher l'objectif que suit l'utilisateur
			$scope.goals.forEach(function(item) {
				if (item.idGoal == $scope.user.idGoal) {
					item.checked = true;
				}else{
					item.checked = false;
				}
			});
			console.log($scope.goals);
	}

	$scope.init();

	// Quand on sélectionne un nouvel objectif, on décoche les autres
	$scope.changeObjectif = function(objectif) {
		console.log(objectif);
		console.log($scope.goals);
		$ionicLoading.show();
		var id = 0;
		var id =+ objectif.idGoal;
		$scope.user.idGoal = id;

		$scope.goal.idGoal = id;
		$scope.goal.description = objectif.description.valueOf();
		$scope.goal.name = objectif.name.valueOf();
		$scope.goal.image = objectif.image.valueOf();
		console.log($scope.goal);
		userService.setGoal($scope.user).then(function(response){
			$scope.goals.forEach(function(item,index) {
				if ($scope.goal.idGoal != item.idGoal) {
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