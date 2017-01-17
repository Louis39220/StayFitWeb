angular.module('creationexercise.controllers', [])

.controller('CreationexerciseCtrl', function($scope,sportService) {
	var initVariable = function(){
		$scope.newExercise = {nameExercise:'',
						  descriptionExercise:'',
						  difficultyShoulderExercise: null,
						  legDifficultyExercice: null,
						  difficultyAbsExercise: null,
						  difficultyArmExercise:null,
						  difficultyButtExercise:null,
						  difficultyBackExercise:null,
						  difficultyCheastExercise:null,
						  pictureExercise:''
		};
	};
	initVariable();

	$scope.saveNewExercise = function(newExercise) {
		console.log("newExercise :", newExercise);
		sportService.createExercise(newExercise).then(function(response){
			console.log("Reponse WS create exo :", response.data);
			//TODO gestion erreur
			initVariable();
		})
	}

  

});