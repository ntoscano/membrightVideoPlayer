(function(){
	var app = angular.module('getDeck', ['app-service', 'ngSanitize']);

	app.controller('DeckController',['$scope','$sce','deckGetter', function($scope, $sce, deckGetter){
		$scope.deck = deckGetter.getNextDeck("The Agricultural Revolution");	
		$scope.$on('seek', function(event, time){
			$scope.$broadcast('seekTo', time);
		});
		$scope.$on('timer', function(event, Vtime){
			$scope.$broadcast('highlight', Vtime);
		});
		$scope.des = $scope.deck.content.description
   	}]);
})();
