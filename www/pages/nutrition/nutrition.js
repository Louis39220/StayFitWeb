angular.module('nutrition', [])
.controller('NutritionCtrl', function($scope,$ionicLoading,nutritionService){

	//affichage par page
	//$scope.selectedpractice = $scope.practices[0];
	$scope.$on("$ionicView.beforeEnter", function(event, data){
		$ionicLoading.show();
		nutritionService.getMeals($scope.user.idGoal)

		.then(function(response) {
			console.log(response);
			if (response.data) {
			  $scope.meals = response.data;
			  $scope.selectedmeal = $scope.meals[0];
			  console.log($scope.meals);
			  $ionicLoading.hide();
			  console.log($scope.selectedmeal);
			}else{
			  $ionicLoading.hide();
			}
		}, function() {
			$ionicLoading.hide();
		}) 
	}); 

	$scope.choosemeal = function (meal){
		console.log(meal);
	}


	// Quand on sélectionne des plats (dishs)
	$scope.chooseDish = function chooseDish (dish) {

		$scope.dishs.forEach(function(item,index) {
			if (exercice != item) {
				$scope.dishs[index].checked = false;
			}else{
				$scope.dishs[index].checked = true;
			}
		});
	}
 
   

})

.filter('range', function() {
  return function(input, total) {
      for (var i=0; i<total; i++)
        input.push(i);
    return input;
  };
});


