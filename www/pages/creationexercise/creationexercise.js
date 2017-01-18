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
		var rand = Math.floor((Math.random() * 10) + 1);
		if ($scope.file) {
			newExercise.pictureExercise = "ressources/"+newExercise.nameExercise+rand;
			sportService.createExercise(newExercise).then(function(response){
				var req = uploadService.upload($scope.file,newExercise.nameExercise+rand);
				if(req.status == 200){
					console.log("ok");
					console.log("Reponse WS create exo :", response.data);
					//TODO gestion erreur
					initVariable();
				}
			})
		}
	}

	$scope.setFile = function(file) {
	    $scope.file = file;
	};
})