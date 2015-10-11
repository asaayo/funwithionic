angular.module('starter.controllers', [])

.controller('ToDoListCtrl', function($scope,$ionicModal) {
	$scope.toDoList = [{
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
			didit: true
		}];

$scope.AddItem = function(data){
	$scope.toDoList.push({task:data.newItem,status:'not done'});
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
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  
});