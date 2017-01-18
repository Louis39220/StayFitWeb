angular.module('creationmeal.controllers', [])

.controller('CreationmealCtrl', function($scope, nutritionService) {

	$scope.modif = {idGoal:'', mealName:'', description:'', idUser:$scope.user.id, idDietitian:$scope.user.id, isRecommended:1};
	$scope.mealGoal = {};
	$scope.dishs = {};
	nutritionService.getDishs().then(function(response){
		console.log(response.data);
		$scope.dishs = response.data;
	});



  $scope.newLinks = [{id: '0'}];

  $scope.saveNewMeal = function(modif,newLinks) {
  	modif.idGoal = modif.goal.idGoal;
  	console.log(modif);
  	console.log(newLinks);
  	nutritionService.setMeal(modif).then(function(response){
  		//TODO gestion erreur
  		console.log("Retour WS createMeal:",response);
  		newLinks.forEach(function(item){
  			item.idDiner = response.data;
  			item.idDish = item.selectedDish.idDish;
  			console.log(item);
  			nutritionService.addDish(item).then(function(response){
  				//TODO gestion erreur
  				console.log("ajout plat :",response);
  			})
  		})
  		
  	});
  }

  $scope.addNewChoice = function() {

    var newItemNo = $scope.newLinks.length+1;

    $scope.newLinks.push({id:'choice'+newItemNo});

  };

    

  $scope.removeChoice = function(link) {
  	console.log(link);
    var lastItem = $scope.newLinks.length-1;

    $scope.newLinks.splice(lastItem);

  };

  


  

});