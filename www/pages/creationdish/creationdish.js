angular.module('creationdish.controllers', [])

.controller('CreationdishCtrl', function($scope, nutritionService,uploadService) {
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
	$scope.file = null;

	$scope.saveNewDish = function(newDish) {
		var rand = Math.floor((Math.random() * 10) + 1);
		if (file) {
			newDish.picture = "ressources/"+newDish.name+rand;
			nutritionService.createDish(newDish).then(function(response){
				var req = uploadService.upload($scope.file,newDish.name+rand);
				if(req.status == 200){
					console.log("ok");
					console.log("Reponse WS create plat :", response.data);
					//TODO gestion erreur
					initVariable();
				}
			})
		}else{
			//TODO gestion erreur
		}
	}

	$scope.setFile = function(file) {
	    $scope.file = file;
	};  

});