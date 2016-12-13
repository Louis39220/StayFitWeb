angular.module('information.controllers', [])

.controller('InformationCtrl', function($scope,$ionicLoading,bodyUserService) {
	$scope.modif = {weight:'', percentage:''};

	$scope.getInfos = function () {
		bodyUserService.getBodyUser($scope.user.id).then(function(response){
			$scope.weight = response.data.weight;
			$scope.percentage = response.data.gracemass;
			$ionicLoading.hide();
		}, function(){
			$ionicLoading.hide();
		})

	};

	$ionicLoading.show();
	$scope.getInfos();

	$scope.doInformationModification = function (modif) {
		console.log(modif);
		if (modif.weight != ''){
			$scope.bodyUser.weight = modif.weight;
		}
		if (modif.percentage != ''){
			$scope.bodyUser.percentage = modif.percentage;
		}
		$scope.modif = {poids:'', size:'', percentage:''};
	}


});