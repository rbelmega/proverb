angular.module("proverb")
	.controller("quoteCtrl", ["$scope", "quoteService", function($scope, quoteService) {

		quoteService.getQuotes().then(function(data) {
			$scope.proverbs = data;
		});

		$scope.checkVisible = function(carouselIndex, $index){
			return carouselIndex > $index - 2 && carouselIndex < $index + 2
		}

	}]);