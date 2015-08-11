angular.module("proverb")
	.controller("quoteCtrl", ["$scope", "quoteService", "$timeout",
		function($scope, quoteService, $timeout) {

			quoteService.getQuotes().then(function(data) {
				$scope.proverbs = data;
			});

			var current;
			var next;
			var prev;
			$scope.nextItem = function(evt) {
				console.log(arguments[0]);

				var delta = evt.deltaX;
				var scale = 100 / Math.abs(delta);
				scale = scale > 1 ? 1 : scale;
				current = angular.element(evt.target);
				next = current.next();
				var yy = 550 + delta;

				current
					.removeClass("stopped")

					.attr("style", "transform:translate3d(" + delta + "px,0px, 0px) scale(" + scale + ")");
				next
					.removeClass("stopped")

					.attr("style", "transform:translate3d(" +  yy + "px,0px, 0px)" +
					" scale(" + 1 + ")");
				//angular.element(evt.target).prev()
				//
				//	.attr("style", "transform:translate3d(" + delta + "px,0px, 0px) scale(" + 1 + ")");
			};

			$scope.prevItem = function(evt) {
				console.log(arguments[0]);

				var delta = evt.deltaX;
				var scale = 100 / Math.abs(delta);
				scale = scale > 1 ? 1 : scale;
				current = angular.element(evt.target);
				prev = current.prev();
				var yy = 550 - delta;

				current
					.attr("style", "transform:translate3d(" + delta + "px,0px, 0px) scale(" + scale + ")");
				prev
					.attr("style", "transform:translate3d(" +  yy + "px,0px, 0px)" +
					" scale(" + 1 + ")");
				//angular.element(evt.target).prev()
				//
				//	.attr("style", "transform:translate3d(" + delta + "px,0px, 0px) scale(" + 1 + ")");
			};

			$scope.stop = function(evt) {
				$timeout(function() {
					next
						.addClass("current")
						.addClass("stopped")
						.removeClass("next")
						.attr("style", "");
					current
						.addClass("prev")
						.addClass("stopped")
						.removeClass("current")
						.attr("style", "");
				});
			}
		}]);