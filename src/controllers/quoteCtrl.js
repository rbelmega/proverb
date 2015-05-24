angular.module("proverb")
.controller("quoteCtrl",["$scope", "quoteService", function($scope, quoteService){


		quoteService.getQuotes().then(function(data){
			$scope.proverbs = data;
		});

	}]);