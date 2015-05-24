angular.module("proverb")

.service("quoteService", ["$http", function($http){

		this.getQuotes = function(){

			return $http.get("data/proverbs.json").then(function(data){
				return data.data;
			})
		};

	}]);