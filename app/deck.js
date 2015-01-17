(function(){
	var app = angular.module('get-deck', []);
	app.controller('DeckController',['$http', function($http){
		var este = this
		this.deck = {};
		$http.get('http://membright.com/api/v2/deck/149?format=json').success(function(data){
			este.deck = data;
			console.log("test");
			console.log(data);
		});
		console.log("test2")
	}]);
});
