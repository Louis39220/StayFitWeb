angular.module('sport', [])
.controller('SportCtrl', function($scope){

	//affichage par page
	$scope.selectedpractice = $scope.practices[0];
	console.log($scope.selectedpractice);

	$scope.choosepractice = function (practice){
		console.log(practice);
	}


	// Quand on sélectionne des exercicez
	$scope.chooseExcercice = function chooseExcercice (exercice) {

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
  
   $scope.loadNextPage = function loadNextPage () {
    $scope.currentPage++;
    $scope.pageSize = $scope.currentPage * DEFAULT_PAGE_SIZE_STEP;
  }
	


});





