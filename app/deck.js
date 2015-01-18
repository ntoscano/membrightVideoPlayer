(function(){
	var app = angular.module('getDeck', ['app-service']);

	app.controller('DeckController',['$sce','deckGetter', function($sce, deckGetter){
		this.deck = deckGetter.getNextDeck("The Agricultural Revolution");	
		this.deck.name = this.deck.deck.name;
		console.log(this.deck.name);
		this.deck.videoUrl = $sce.trustAsResourceUrl(this.deck.deck.content.sourceUrl.replace("watch?v=","embed/"));
   	}]);
})();
