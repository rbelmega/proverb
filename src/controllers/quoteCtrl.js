angular.module("proverb")
	.controller("quoteCtrl", ["$scope", "quoteService", "$swipe", function($scope, quoteService, $swipe) {

		quoteService.getQuotes().then(function(data) {
			$scope.proverbs = data;
		});

	}]);