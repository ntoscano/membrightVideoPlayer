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

		var cards = {
  "meta": {
    "limit": 1000,
    "next": null,
    "offset": 0,
    "previous": null,
    "totalCount": 4
  },
  "objects": [
    {
      "access": "pu",
      "content": "{\"answer\":\"Fishing\",\"links\":[{\"label\":\"2:30\",\"url\":\"http:\/\/youtu.be\/Yocja_N5s1I?t=2m30s\"}],\"question\":\"What was the best hunting strategy of early humans?\"}",
      "createdAt": "2015-01-18T00:35:02.515134",
      "id": 5127,
      "obj": {
        "answer": "Fishing",
        "links": [
          {
            "label": "2:30",
            "url": "http:\/\/youtu.be\/Yocja_N5s1I?t=2m30s"
          }
        ],
        "question": "What was the best hunting strategy of early humans?"
      },
      "ownerId": 291,
      "resourceUri": "\/api\/v2\/card\/5127",
      "type": "frontAndBack",
      "updatedAt": "2015-01-20T04:17:33.291156"
    },
    {
      "access": "pu",
      "content": "{\"answer\":\"Everything.\",\"links\":[{\"label\":\"0:12\",\"url\":\"http:\/\/youtu.be\/Yocja_N5s1I?t=12s\"}],\"question\":\"What will be on the test?\"}",
      "createdAt": "2015-01-18T00:31:49.279764",
      "id": 5125,
      "obj": {
        "answer": "Everything.",
        "links": [
          {
            "label": "0:12",
            "url": "http:\/\/youtu.be\/Yocja_N5s1I?t=12s"
          }
        ],
        "question": "What will be on the test?"
      },
      "ownerId": 291,
      "resourceUri": "\/api\/v2\/card\/5125",
      "type": "frontAndBack",
      "updatedAt": "2015-01-20T04:01:46.457603"
    },
    {
      "access": "pu",
      "content": "{\"answer\":\"In various places around the world, using the plants early humans had at their disposal.\",\"links\":[{\"label\":\"3:08\",\"url\":\"http:\/\/youtu.be\/Yocja_N5s1I?t=3m8s\"}],\"question\":\"Where did agriculture develop?\"}",
      "createdAt": "2015-01-18T00:36:44.795185",
      "id": 5128,
      "obj": {
        "answer": "In various places around the world, using the plants early humans had at their disposal.",
        "links": [
          {
            "label": "3:08",
            "url": "http:\/\/youtu.be\/Yocja_N5s1I?t=3m8s"
          }
        ],
        "question": "Where did agriculture develop?"
      },
      "ownerId": 291,
      "resourceUri": "\/api\/v2\/card\/5128",
      "type": "frontAndBack",
      "updatedAt": "2015-01-20T04:19:16.397761"
    },
    {
      "access": "pu",
      "content": "{\"answer\":\"Hunting and gathering\",\"links\":[{\"label\":\"2:18\",\"url\":\"http:\/\/youtu.be\/Yocja_N5s1I?t=2m18s\"}],\"question\":\"15,000 years ago, what were humans doing to stay alive?\"}",
      "createdAt": "2015-01-18T00:34:14.310298",
      "id": 5126,
      "obj": {
        "answer": "Hunting and gathering",
        "links": [
          {
            "label": "2:18",
            "url": "http:\/\/youtu.be\/Yocja_N5s1I?t=2m18s"
          }
        ],
        "question": "15,000 years ago, what were humans doing to stay alive?"
      },
      "ownerId": 291,
      "resourceUri": "\/api\/v2\/card\/5126",
      "type": "frontAndBack",
      "updatedAt": "2015-01-20T04:16:23.319242"
    }
  ]
} 


 
		deckGetter.getNextDeck = function(deckName){
			for(var x in decks){
				if(deckName == decks[x].deck.name){
					var deck = decks[x].deck;
					deck.sourceUrl = decks[x].deck.content.sourceUrl;
					deck.cards = cards.objects;
					for (var x in deck.cards){
						time = deck.cards[x].obj.links[0].label.split(":");
						time = [parseInt(time[0]), parseInt(time[1])];
						deck.cards[x].time = time[0] * 60 + time[1];
						deck.cards[x].minTime = deck.cards[x].obj.links[0].label;
					};
					return deck;
				}else{
				console.log("Did not find deck");
				}
			};
		};

   }]);

})();














