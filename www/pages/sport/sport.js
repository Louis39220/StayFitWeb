angular.module('sport', [])
.controller('SportCtrl', function($scope,$ionicLoading,sportService){

	//affichage par page
	//$scope.selectedpractice = $scope.practices[0];
	$scope.$on("$ionicView.beforeEnter", function(event, data){
		$ionicLoading.show();
		sportService.getPractices($scope.user.idGoal)

		.then(function(response) {
			console.log(response);
			if (response.data) {
			  $scope.practices = response.data;
			  $scope.selectedpractice = $scope.practices[0];
			  console.log($scope.practices);
			  $ionicLoading.hide();
			  console.log($scope.selectedpractice);
			}else{
			  $ionicLoading.hide();
			}
		}, function() {
			$ionicLoading.hide();
		}) 
	}); 

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
	


})

.filter('range', function() {
  return function(input, total) {
      for (var i=0; i<total; i++)
        input.push(i);
    return input;
  };
});


