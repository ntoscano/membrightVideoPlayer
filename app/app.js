'use strict';

// Declare app level module which depends on views, and components
var app =  angular.module('myApp', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller('DeckController',['$http', '$sce', function($http, $sce){
    var este = this;
    this.deck = {};
	this.deck.videoUrl = "";
	$http.get('http://membright.com/api/v2/deck/214?format=json').success(function(data){
        este.deck = data;
        console.log("test");
        console.log(data);
		este.deck.videoUrl = $sce.trustAsResourceUrl(este.deck.content.sourceUrl.replace("watch?v=","embed/"));
	});
	
}]);
