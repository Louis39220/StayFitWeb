angular.module('creationdish.controllers', [])

.controller('CreationdishCtrl', function($scope, nutritionService) {
	var initVariable = function(){
		$scope.newDish = {name:'',
						  description:'',
						  dishRecette:'',
						  caloriePercent:null,
						  proteinePercent:null,
						  glucidePercent:null,
						  lipidePercent:null,
						  picture:''
		};
	};
	initVariable();

	$scope.saveNewDish = function(newDish) {
		console.log("newDish :", newDish);
		nutritionService.createDish(newDish).then(function(response){
			console.log("Reponse WS create plat :", response.data);
			//TODO gestion erreur
			initVariable();
		})
	}

  

});