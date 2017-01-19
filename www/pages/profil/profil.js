angular.module('profil.controllers', [])

.controller('ProfilCtrl', function($scope,$ionicLoading,userService,uploadService) {
	$scope.$on("$ionicView.beforeEnter", function(event, data){

	});
	$scope.modif = {firstName:'', lastName:'', birthday:'',size:'', sexe:'', showModification: false};
	$scope.file = null;
// marche pas
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
		if (modif.size != ''){
			$scope.user.size= modif.size;
		}
		
		if (modif.sexe != ''){
			$scope.user.sexe = modif.sexe;
		}
		if ($scope.file) {
			$scope.user.picture = "ressources/"+$scope.user.id+".jpg";
		}
		console.log($scope.user);
		$scope.modif = {firstName:'', lastName:'', size:'', birthday:'', sexe:'',showModification: false};
		userService.updateInfos({id: $scope.user.id, firstname: $scope.user.firstName, lastname: $scope.user.lastName, size: $scope.user.size, birthday: $scope.user.birthday, sexe: $scope.user.sexe, picture: $scope.user.picture})
		.then(function (response){

			if (response.data != 0) {
				if ($scope.file){
	          var req = uploadService.upload($scope.file,$scope.user.id+".jpg");
	          if(req.status == 200){
	          	console.log("ok");
	          	//TODO gestion erreur
	          }
	      }
	          $scope.user.isConnected=true;
	          $scope.erreurSubscribe = false;
	          console.log("subscribe ok");
	          $ionicLoading.hide();
	        }else{
	          $scope.erreurSubscribe = true;
	          $ionicLoading.hide();
	        }
		}, function() {
			$scope.erreurSubscribe = true;
			$ionicLoading.hide();
		})
	}

	$scope.setFile = function(file) {
	    $scope.file = file;
	};


});