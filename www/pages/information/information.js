angular.module('information.controllers', [])

.controller('InformationCtrl', function($scope) {
	$scope.modif = {weight:'', size:'', percentage:''};

	$scope.doInformationModification = function (modif) {
		console.log(modif);
		if (modif.weight != ''){
			$scope.user.weight = modif.weight;
		}
		if (modif.size != ''){
			$scope.user.size = modif.size;
		}
		if (modif.percentage != ''){
			$scope.user.percentage = modif.percentage;
		}
		$scope.modif = {poids:'', size:'', percentage:''};
	}


});