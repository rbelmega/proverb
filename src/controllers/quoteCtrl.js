angular.module("proverb")
.controller("quoteCtrl",["$scope", "quoteService", function($scope, quoteService){


		var allProverbs;
		quoteService.getQuotes().then(function(data){
			allProverbs = data.slice();
			$scope.proverbs = allProverbs.splice(0,3);
		});

		$scope.left = function(){
			$scope.proverbs.push(allProverbs.splice(0,1)[0]);

			console.log($scope.proverbs);
		};

		$scope.right = function(){
			console.log("left");
		}
	}]);