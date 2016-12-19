

'use strict';

angular
	.module('sport')
	.controller('SportCtrl', SportCtrl);

SportCtrl.$inject = ['exercices'];

function SportCtrl (exercices) {

	var vm = this;

	//variable 
	var DEFAULT_PAGE_SIZE_STEP = 1;

	//affichage par page
	vm.currentPage = 1;
  	vm.pageSize = vm.currentPage * DEFAULT_PAGE_SIZE_STEP;  

	vm.exercices = exercices;
	vm.chooseExcercice = chooseExcercice;
	vm.loadNextPage = loadNextPage;



	// Quand on sélectionne des exercicez
	function chooseExcercice (exercice) {

		vm.excercices.forEach(function(item,index) {
			if (exercice != item) {
				vm.excercices[index].checked = false;
			}else{
				vm.excercices[index].checked = true;
			}
		});
	}


  
  
  
   function loadNextPage () {
    vm.currentPage++;
    vm.pageSize = vm.currentPage * DEFAULT_PAGE_SIZE_STEP;
  }
	


}





