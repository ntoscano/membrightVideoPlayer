(function(){

	var app = angular.module('app-directives', ['getDeck']);
	app.directive("embedLink", ['$sce', function($sce){
		return{
			restrict: 'A',
			scope : {
				deck : '='
			},
			templateUrl: "view/iframe.html",
			compile : function (tElement, tAttrs, transclude) {
				return { 
					pre : function (scope, iElement, iAttrs) {
					},
					post : function (scope, iElement, iAttrs) {
						console.log(scope.deck.name);
						scope.videoEmbedUrl = $sce.trustAsResourceUrl(scope.deck.content.sourceUrl.replace("watch?v=","embed/"));
					}
				}
			}
		};
	}]);

	app.directive('videoTitle', function(){
		return{
			restrict: 'A',
			scope: {
				deck: '='
			},
			templateUrl: "view/videoTitle.html"
		};
	});

	app.directive('navbarLink', function(){
		return{
			restrict: 'A',
			scope: {
				deck: '='
			},
			templateUrl: "view/navbar.html",
			compile: function(tElement, tAttrs, transclude){
				return{
					pre : function (scope, iElement, iAttrs){
					},
					post: function (scope, iElement, iAttrs){
						scope.videoUrl = scope.deck.content.sourceUrl
						scope.deckUrl = "http://membright.com/app/#/search/" + scope.deck.name.replace(" ", "_") + "/Deck/" + scope.deck.id
					}
				}
			}
		};
	});







})();
