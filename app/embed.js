(function(){

	var app = angular.module('app-directives', ['getDeck']);

	app.directive('youtube', function($window){
		return{
			restrict: 'E',
			scope: {
				height: "@",
				width: "@",
				deck: "=",
			},
			template: '<div></div>',
			link: function(scope, element){
				var tag = document.createElement('script');
				tag.src = "https://www.youtube.com/iframe_api"
				var firstScriptTag = document.getElementsByTagName('script')[0];
				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

				var player;
				var timer = 0;

				$window.onYouTubeIframeAPIReady = function(){
					player = new YT.Player(element.children()[0], {
						height: scope.height,
						width: scope.width,
						videoId: scope.deck.sourceUrl.split("=")[1] 
					});
				};
				scope.$on('seekTo', function(event, time){
					console.log(time);
					player.seekTo(time);
				});
				setInterval(function(){
					timer = player.getCurrentTime();
					console.log(timer);
				}, 500);
			}
		}
	});

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

	app.directive('description', function(){
		return{
			restrict: 'A',
			scope: {
				descri: '='
			},
			templateUrl: "view/description.html",
			compile: function(tElement, tAttrs, transclude){
				return{
					pre : function(scope, iElement, iAttrs){
					},
					post : function(scope, iElement, iAttrs){
					console.log(scope.descri) 
					}
				}
			}
		};
	});

	app.directive('showCard', function(){
		return{
			restrict: 'A',
			scope: {
				deck: '=',
			},
			templateUrl: "view/showCards.html",
			compile: function(tElement, iElement, transclude){
				return {
					pre : function(scope, iElement, iAttrs){
					},
					post : function(scope, iElement, iAttrs){
						for (var x in scope.deck.cards){
							scope.cards = scope.deck.cards
							scope.cards[x].question = scope.deck.cards[x].obj.question
							scope.cards[x].answer = scope.deck.cards[x].obj.answer
							console.log(scope.cards + "test");
						}
						scope.seek = function(x){
							console.log("x:", x)
							console.log("time", scope.deck.cards[x].time);
							scope.$emit('seek', scope.deck.cards[x].time);
						}
					}
				}
			}
		};
	});
	app.directive('highlightCard', function(){
		return{
			restrict: 'A',
			scope: {
				deck: '=',
				time: '@',
			},
			templateUrl: "view/highlightCard.html",
			compile: function(tElement, iElement, transclude){
				return{
					pre : function(scope, iElement, iAttrs){
					},
					post : function(scope, iElement, iArrtr){
					}
				}
			}
		}
	});





})();
