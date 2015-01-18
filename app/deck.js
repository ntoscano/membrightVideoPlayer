(function(){
	var app = angular.module('getDeck', ['app-service']);

	app.controller('DeckController',['$scope','$sce','deckGetter', function($scope, $sce, deckGetter){
		$scope.deck = deckGetter.getNextDeck("The Agricultural Revolution");	
		$scope.deck.name = $scope.deck.deck.name;
		console.log($scope.deck.name);
		$scope.deck.videoUrl = $sce.trustAsResourceUrl($scope.deck.deck.content.sourceUrl.replace("watch?v=","embed/"));
   	}]);
})();
