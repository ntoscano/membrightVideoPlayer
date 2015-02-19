(function(){
	var app = angular.module('getDeck', ['app-service', 'ngSanitize']);

	app.controller('DeckController',['$scope','$sce','deckGetter', function($scope, $sce, deckGetter){

		var deckId = 214; 
//		$scope.deck = deckGetter.getNextDeck(deckId);
//		$scope.des = $scope.deck.content.description;
//		console.log($scope.deck);

		var deckInfo = deckGetter.getNextDeck2(deckId);
		
		console.log(deckInfo);

		deckInfo.then(function(deck){
			$scope.deck = deck;
			deckInfo.cards.then(function(cards){
				$scope.deck.cards = cards.objects;
			})
			for (var x in $scope.deck.cards){
        		time = $scope.deck.cards[x].obj.links[0].label.split(":");
        	    time = [parseInt(time[0]), parseInt(time[1])];
    	        $scope.deck.cards[x].time = time[0] * 60 + time[1];
	            $scope.deck.cards[x].minTime = $scope.deck.cards[x].obj.links[0].label;
	        }
			$scope.des = $scope.deck.content.description;
			if(!$scope.$$phase) $scope.$apply();
		});

		$scope.$on('seek', function(event, time){
			$scope.$broadcast('seekTo', time);
		});
		$scope.$on('timer', function(event, Vtime){
			$scope.$broadcast('highlight', Vtime);
		});
		$scope.$on('timer2', function(event, Vtime){
			$scope.$broadcast('highlight2', Vtime);
		});

   	}]);
})();
