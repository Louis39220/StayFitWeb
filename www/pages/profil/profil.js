angular.module('profil.controllers', [])

.controller('ProfilCtrl', function($scope,$ionicLoading,userService,uploadService) {
	$scope.$on("$ionicView.beforeEnter", function(event, data){

	});
	$scope.modif = {firstName:'', lastName:'', birthday:'', sexe:'', showModification: false};
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
		if (modif.sexe != ''){
			$scope.user.sexe = modif.sexe;
		}
		if ($scope.file) {
			$scope.user.picture = "/ressources/"+$scope.user.id+"jpg";
		}
		$scope.modif = {firstName:'', lastName:'', sexe:'',showModification: false};
		userService.setInfos({id: $scope.user.id, firstname: $scope.user.firstName, lastname: $scope.user.lastName, birthday: $scope.user.birthday, sexe: $scope.user.sexe, size: $scope.user.size | 0,weight: $scope.user.weight | 0})
		.then(function (){
			if (response.data != 0) {
	          $scope.user.mail=newUser.mail;
	          $scope.user.id = response.data;
	          var req = uploadService.upload($scope.file,$scope.user.id);
	          if(req.status == 200){
	          	console.log("ok");
	          	//TODO gestion erreur
	          }
	          $scope.user.isConnected=true;
	          $scope.erreurSubscribe = false;
	          console.log("subscribe ok");
	          $ionicLoading.hide();
	          $scope.getFirstInfos();
	        }else{
	          $scope.erreurSubscribe = true;
	          $ionicLoading.hide();
	          $scope.subscribe();
	        }
		}, function() {
			$scope.erreurSubscribe = true;
			$ionicLoading.hide();
			$scope.subscribe();
		})
	}

	$scope.setFile = function(file) {
	    $scope.file = file;
	};


});