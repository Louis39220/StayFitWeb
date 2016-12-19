angular.module('objectif.controllers', [])

.controller('ObjectifCtrl', function($scope,$ionicLoading,goalService) {

	$scope.init = function () {

		$ionicLoading.show();
		// TODO récuperer la liste d'objectifs
		goalService.getGoals()
		.then(function(response){
			$scope.ListObjectif = response.data;
			console.log(response);
			// for each sur les objectifs pour cocher l'objectif que suit l'utilisateur
			$scope.ListObjectif.forEach(function(item) {
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