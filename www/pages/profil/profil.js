angular.module('profil.controllers', [])

.controller('ProfilCtrl', function($scope) {
	console.log('ProfilCtrl');
	$scope.modif = {firstName:'', lastName:'', birthday:'', sexe:'', showModification: false};

	$scope.showProfilModification = function () {
		$scope.modif.showModification=true;
		document.getElementById('modifFirst').focus();
	}

	$scope.doProfilModification = function (modif) {
		console.log(modif);
		if (modif.firstName != ''){
			$scope.user.firstName = modif.firstName;
		}
		if (modif.lastName != ''){
			$scope.user.lastName = modif.lastName;
		}
		if (modif.birthday != ''){
			$scope.user.birthday = modif.birthday;
		}
		if (modif.sexe != ''){
			$scope.user.sexe = modif.sexe;
		}
		$scope.modif = {firstName:'', lastName:'', sexe:'',showModification: false};
	}


});