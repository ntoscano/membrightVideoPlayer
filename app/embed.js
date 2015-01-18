(function(){

	var app = angular.module('app-directives', ['getDeck']);
	app.directive("embedLink", function(){
		return{
			restrict: 'E',
			scope : {
				deckCTRL: '=info'
				},
			templateUrl: "iframe.html"
		};
	});

	app.directive('videoTitle', function(){
		return{
			restrict: 'E',
			scope: {
				deckCTRL: '=info'
			},
			templateUrl: "videoTitle.html"
		};
	});







})();
