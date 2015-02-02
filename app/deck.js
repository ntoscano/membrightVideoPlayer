(function(){
	var app = angular.module('getDeck', ['app-service']);

	app.controller('DeckController',['$scope','$sce','deckGetter', function($scope, $sce, deckGetter){
		$scope.deck = deckGetter.getNextDeck("The Agricultural Revolution");	
		console.log($scope.deck.name);
		console.log($scope.deck.cards);
		console.log($scope.deck.sourceUrl);
		$scope.$on('seek', function(event, time){
			console.log(time);
			$scope.$broadcast('seekTo', time);
		});

   	}]);
})();
