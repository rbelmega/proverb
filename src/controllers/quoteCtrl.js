angular.module("proverb")
	.controller("quoteCtrl", ["$scope", "quoteService", "$timeout",
		function($scope, quoteService, $timeout) {

			quoteService.getQuotes().then(function(data) {
				$scope.proverbs = data;
			});

			var current;
			var next;
			var prev;
			var direction;

			$scope.display = 0;

			$scope.nextItem = function(evt) {
				direction = "next";
				var delta = evt.deltaX;
				var scale = 100 / Math.abs(delta);
				prev = angular.element(document.querySelector(".prev-item"));
				scale = scale > 1 ? 1 : scale;
				current = angular.element(evt.target);
				next = current.next();

				var nextDelta = current[0].clientWidth + delta;
				var prevDelta = delta - current[0].clientWidth;

				current
					.attr("style",
					"-webkit-transform: translate3d(" + delta + "px,0px, 0px) scale(" + scale + ");" +
					"-moz-transform:    translate3d(" + delta + "px,0px, 0px) scale(" + scale + ");" +
					"-ms-transform:     translate3d(" + delta + "px,0px, 0px) scale(" + scale + ");" +
					"-o-transform:      translate3d(" + delta + "px,0px, 0px) scale(" + scale + ");" +
					"transform:   		translate3d(" + delta + "px,0px, 0px) scale(" + scale + ");"
				);
				next
					.removeClass("stopped")
					.attr("style",
					"-webkit-transform: translate3d(" + nextDelta + "px,0px, 0px) scale(" + scale + ");" +
					"-moz-transform:    translate3d(" + nextDelta + "px,0px, 0px) scale(" + scale + ");" +
					"-ms-transform:     translate3d(" + nextDelta + "px,0px, 0px) scale(" + scale + ");" +
					"-o-transform:      translate3d(" + nextDelta + "px,0px, 0px) scale(" + scale + ");" +
					"transform:   		translate3d(" + nextDelta + "px,0px, 0px) scale(" + scale + ");"
				);
				prev
					.attr("style",
					"-webkit-transform: translate3d(" + prevDelta + "px,0px, 0px) scale(" + scale + ");" +
					"-moz-transform:    translate3d(" + prevDelta + "px,0px, 0px) scale(" + scale + ");" +
					"-ms-transform:     translate3d(" + prevDelta + "px,0px, 0px) scale(" + scale + ");" +
					"-o-transform:      translate3d(" + prevDelta + "px,0px, 0px) scale(" + scale + ");" +
					"transform:   		translate3d(" + prevDelta + "px,0px, 0px) scale(" + scale + ");"
				);
			};

			$scope.prevItem = function(evt) {
				direction = "prev";
				var delta = evt.deltaX;
				var scale = 100 / Math.abs(delta);
				scale = scale > 1 ? 1 : scale;
				current = angular.element(evt.target);
				prev = angular.element(document.querySelector(".prev-item"));

				var nextDelta = current[0].clientWidth + delta;
				var prevDelta = delta - current[0].clientWidth;

				current
					.attr("style",
					"-webkit-transform: translate3d(" + delta + "px,0px, 0px) scale(" + scale + ");" +
					"-moz-transform:    translate3d(" + delta + "px,0px, 0px) scale(" + scale + ");" +
					"-ms-transform:     translate3d(" + delta + "px,0px, 0px) scale(" + scale + ");" +
					"-o-transform:      translate3d(" + delta + "px,0px, 0px) scale(" + scale + ");" +
					"transform:   		translate3d(" + delta + "px,0px, 0px) scale(" + scale + ");"
				);
				next
					.removeClass("stopped")
					.attr("style",
					"-webkit-transform: translate3d(" + nextDelta + "px,0px, 0px) scale(" + scale + ");" +
					"-moz-transform:    translate3d(" + nextDelta + "px,0px, 0px) scale(" + scale + ");" +
					"-ms-transform:     translate3d(" + nextDelta + "px,0px, 0px) scale(" + scale + ");" +
					"-o-transform:      translate3d(" + nextDelta + "px,0px, 0px) scale(" + scale + ");" +
					"transform:   		translate3d(" + nextDelta + "px,0px, 0px) scale(" + scale + ");"
				);
				prev
					.attr("style",
					"-webkit-transform: translate3d(" + prevDelta + "px,0px, 0px) scale(" + scale + ");" +
					"-moz-transform:    translate3d(" + prevDelta + "px,0px, 0px) scale(" + scale + ");" +
					"-ms-transform:     translate3d(" + prevDelta + "px,0px, 0px) scale(" + scale + ");" +
					"-o-transform:      translate3d(" + prevDelta + "px,0px, 0px) scale(" + scale + ");" +
					"transform:   		translate3d(" + prevDelta + "px,0px, 0px) scale(" + scale + ");"
				);
			};

			$scope.stop = function(evt) {
				$timeout(function() {
					$scope.display = direction === "prev" ? $scope.display -= 1 : $scope.display += 1;

					if (direction === "prev") {
						prev
							.addClass("current")
							.addClass("stopped")
							.removeClass("prev")
							.attr("style", "");
						current
							.addClass("next")
							.addClass("stopped")
							.removeClass("current")
							.attr("style", "");
					} else {
						next
							.addClass("current")
							.addClass("stopped")
							.removeClass("next")
							.attr("style", "");
						current
							.addClass("prev")
							.addClass("stopped")
							.removeClass("next")
							.removeClass("current")
							.attr("style", "");
					}
				});
			}
		}]);