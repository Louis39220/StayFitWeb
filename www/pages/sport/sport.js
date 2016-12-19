angular.module('sport', [])
.controller('SportCtrl', function($scope){

	//affichage par page
	$scope.currentPage = 1;
	DEFAULT_PAGE_SIZE_STEP =3;
  	$scope.pageSize = $scope.currentPage * DEFAULT_PAGE_SIZE_STEP;  

	//$scope.exercices = exercices;
	$scope.chooseExcercice = chooseExcercice;
	$scope.loadNextPage = loadNextPage;



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





