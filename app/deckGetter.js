(function(){
	
	var app = angular.module('app-service', []);

    app.service('deckGetter', ['$http', function($http) {
        var deckGetter = this;
		deckGetter.deck = {}; 

		deckGetter.getNextDeck2 = function(deckId){
			var deck = {};
			cardInfo = $.getJSON('http://membright.com/api/v2/card?deck__id=' + deckId + '&format=json&official=true', function(data){
				var cards = data.objects;
				return cards;
			});
			deckInfo = $.getJSON('http://membright.com/api/v2/deck/' + deckId + '?format=json', function(data){
				var innerDeck = data;			
				return innerDeck;
			});
			deckInfo.cards = cardInfo;
			return deckInfo;
		};	
   }]);
})();














