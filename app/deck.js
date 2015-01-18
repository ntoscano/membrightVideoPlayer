(function(){
	var app = angular.module('getDeck', ['app-service']);

	app.controller('DeckController',['$sce','deckGetter', function($sce, deckGetter){
		deckGetter.getNextDeck("The Agricultural Revolution");
		this.deck = deckGetter.deck;
		this.deck.name = deckGetter.deck.deck.name;
		console.log(this.deck.name);
		this.deck.videoUrl = $sce.trustAsResourceUrl(this.deck.deck.content.sourceUrl.replace("watch?v=","embed/"));
   	}]);
})();
