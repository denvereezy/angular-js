app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Rate a pet\'s cuteness';
  $scope.pets = [
  	{
    	name: 'Winkie',
    	cover: 'img/winkie.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Bobby',
    	cover: 'img/bobby.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Bruno',
    	cover: 'img/bruno.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Snowy',
    	cover: 'img/snowy.jpg',
    	likes: 0,
    	dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) {
  	$scope.pets[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.pets[index].dislikes += 1;
	};
}]);
