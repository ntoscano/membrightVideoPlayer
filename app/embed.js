(function(){

	var app = angular.module('app-directives', ['getDeck']);
	app.directive("embedLink", ['$sce', function($sce){
		return{
			restrict: 'E',
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
			restrict: 'E',
			scope: {
				deck: '='
			},
			templateUrl: "view/videoTitle.html"
		};
	});







})();
