(function(){

	var app = angular.module('app-directives', ['getDeck']);
	app.directive("embedLink", function(){
		return{
			restrict: 'E',
			scope : {},
			templateUrl: "iframe.html"
		};
	});








})();
