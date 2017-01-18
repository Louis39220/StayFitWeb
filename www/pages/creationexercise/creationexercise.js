angular.module('creationexercise.controllers', [])

.controller('CreationexerciseCtrl', function($scope,$http,sportService,uploadService) {
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
		$scope.file = null;
	};
	initVariable();

	$scope.saveNewExercise = function(newExercise) {
		console.log("newExercise :", newExercise);
		newExercise.pictureExercise = $scope.file[0].name;
		sportService.createExercise(newExercise).then(function(response){
			var req = uploadService.upload($scope.file);
			if(req.status == 200){
				console.log("ok");
				console.log("Reponse WS create exo :", response.data);
				//TODO gestion erreur
				initVariable();
			}
		})
	}

	$scope.setFile = function(file) {
	    $scope.file = file;
	};
})