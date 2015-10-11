angular.module('starter.controllers', [])

.controller('ToDoListCtrl', function($scope,$ionicModal) {
	
	$scope.toDoList = (localStorage.getItem('toDoList')!== null) ? JSON.parse(localStorage.getItem('toDoList')) : 
	
	 [{
			task: 'Shark wrangling',
			didit: false
		},{
			task: 'Write to do list',
			didit: false
		},{
			task: 'Systematic domination of the world',
			didit: false
		},{
			task: 'Slam a revolving door',
			didit: false
		},{
			task: 'Find a wrong way to eat a Reese\'s cup',
			didit: false
		},{
			task: 'Escape a black hole',
			didit: false
		}];
	
	
	
$scope.AddItem = function(data){
	$scope.toDoList.push({
			task:data.newItem,
			status:'not done'
		});
	 data.newItem = '';
	 $scope.closeModal();
  };
  
$ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  
  $scope.save = function() {
	  $scope.newList = [];
	  for(var x = 0; x < $scope.toDoList.length; x++){
		  if(!$scope.toDoList[x].didit){
			  $scope.newList.push($scope.toDoList[x]);
		  }
	  }
	  $scope.toDoList = $scope.newList;
	  
	  
	  
	  localStorage.setItem('toDoList', JSON.stringify($scope.newList));
  }
  
});