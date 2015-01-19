(function(){
	
	var app = angular.module('app-service', []);

    app.service('deckGetter', ['$http', function($http) {
        var deckGetter = this;
		deckGetter.deck = {};
        var decks = [{
            "createdAt": "2015-01-18T00:30:05.071013",
            "deck": {
                "access": "pu",
                "content": {
                    "description": "<span style=\"color: rgb(51, 51, 51);\">In which John Green investigates the dawn of human civilization. John looks into how people gave up hunting and gathering to become agriculturalists, and how that change has influenced the world we live in today. Also, there are some jokes about cheeseburgers.<\/span><br style=\"color: rgb(51, 51, 51);\"\/>",
                    "sourceUrl": "http:\/\/www.youtube.com\/watch?v=Yocja_N5s1I"
                },
                "createdAt": "2015-01-18T00:30:05.047727",
                "id": 214,
                "image": "http:\/\/i.ytimg.com\/vi\/Z82q-n0BgjQ\/maxresdefault.jpg",
                "inMarket": null,
                "marketPrice": null,
                "name": "The Agricultural Revolution",
                "ownerId": 291,
                "resourceUri": "\/api\/v2\/deck\/214",
                "updatedAt": "2015-01-18T01:22:35.496190"
            },
            "deckId": 214,
            "id": 761,
            "resourceUri": "\/api\/v2\/userdeckstatus\/761",
            "updatedAt": "2015-01-18T00:30:05.071071"
        },
		{"createdAt": "2015-01-06T00:06:19.376840", "deck": {"access": "pu", "content": null, "createdAt": "2015-01-06T00:06:19.317557", "id": 211, "image": null, "inMarket": null, "marketPrice": null, "name": "More SAT words", "ownerId": 291, "resourceUri": "/api/v2/deck/211", "updatedAt": "2015-01-06T00:06:19.317614"}, "deckId": 211, "id": 755, "resourceUri": "/api/v2/userdeckstatus/755", "updatedAt": "2015-01-06T00:06:19.377029"}, {"createdAt": "2015-01-15T19:05:38.603176", "deck": {"access": "pu", "content": null, "createdAt": "2015-01-15T19:05:38.579966", "id": 213, "image": null, "inMarket": null, "marketPrice": null, "name": "Higher order functions", "ownerId": 291, "resourceUri": "/api/v2/deck/213", "updatedAt": "2015-01-15T19:05:38.580017"}, "deckId": 213, "id": 759, "resourceUri": "/api/v2/userdeckstatus/759", "updatedAt": "2015-01-15T19:05:38.603230"}]

		deckGetter.getNextDeck = function(deck){
			for(var x in decks){
				if(deck == decks[x].deck.name){
					var deck = decks[x].deck;
					console.log(deck.content.sourceUrl + " " + x + " line 37 ran");
					return deck;
				}else{
				console.log("Did not find deck");
				}
			};
		};
   }]);

})();
