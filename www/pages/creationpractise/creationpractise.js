angular.module('creationpractise.controllers', [])

.controller('CreationpractiseCtrl', function($scope,sportService) {

	$scope.modif = {idGoal:'', name:'', description:'', idUser:$scope.user.id};
	$scope.practiceGoal = {};
	$scope.exercises = {};
	sportService.getExercises().then(function(response){
		console.log(response.data);
		$scope.exercises = response.data;
	});



  $scope.newLinks = [{id: '0'}];

  $scope.saveNewPractice = function(modif,newLinks) {
  	modif.idGoal = modif.goal.idGoal;
  	console.log(modif);
  	console.log(newLinks);
  	sportService.setPractice(modif).then(function(response){
  		//TODO gestion erreur
  		console.log("Retour WS createPractice:",response);
  		newLinks.forEach(function(item){
  			item.idPractice = response.data;
  			item.idExo = item.selectedExercise.idExercise;
  			sportService.addExercise(item).then(function(response){
  				//TODO gestion erreur
  				console.log("ajout exercice :",response);
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