(function(){
	var app = angular.module('getDeck', []);

	app.service('deckGetter', ['$http', function($http) {
 		var deckGetter = this;
		deckGetter.deck = {
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
		}
		console.log(deckGetter.deck);
  	}]);
 


	app.controller('DeckController',['$sce','deckGetter', function($sce, deckGetter){
		this.deck = deckGetter.deck;
		this.deck.name = deckGetter.deck.deck.name;
		console.log(this.deck.name);
		this.deck.videoUrl = $sce.trustAsResourceUrl(this.deck.deck.content.sourceUrl.replace("watch?v=","embed/"));
   	}]);
})();
