angular.module('sport', [])
.controller('SportCtrl', function($scope){

	//affichage par page
	$scope.selectedPractise;

	//$scope.exercices = exercices;
	$scope.chooseExcercice = chooseExcercice;
	$scope.loadNextPage = loadNextPage;

	$scope.choosePractise = function (practise){
		console.log(practise);
	}


	// Quand on sélectionne des exercicez
	function chooseExcercice (exercice) {

		$scope.excercices.forEach(function(item,index) {
			if (exercice != item) {
				$scope.excercices[index].checked = false;
			}else{
				$scope.excercices[index].checked = true;
			}
		});
	}
 
  	function print (){
  		window.print();
  	}
  
   function loadNextPage () {
    $scope.currentPage++;
    $scope.pageSize = $scope.currentPage * DEFAULT_PAGE_SIZE_STEP;
  }
	


});





