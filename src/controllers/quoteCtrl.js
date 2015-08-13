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
			var distance;

			$scope.display = 0;

			$scope.nextItem = function(evt) {
				direction = "next";
				var delta = evt.deltaX;
				prev = angular.element(document.querySelector(".prev-item"));
				current = angular.element(evt.target);
				next = current.next();
				var scaleCurrent = (current[0].clientWidth / 2 - Math.abs(delta)) / (current[0].clientWidth / 2);
				scaleCurrent = scaleCurrent > 1 ? 1 : scaleCurrent;
				var scaleNext = 1 + scaleCurrent;

				distance = scaleCurrent;
				var nextDelta = current[0].clientWidth + delta;
				var prevDelta = delta - current[0].clientWidth;

				current
					.removeClass("stopped")
					.attr("style",
					"-webkit-transform: translate3d(" + delta + "px,0px, 0px) scale(" + scaleCurrent + ");" +
					"-moz-transform:    translate3d(" + delta + "px,0px, 0px) scale(" + scaleCurrent + ");" +
					"-ms-transform:     translate3d(" + delta + "px,0px, 0px) scale(" + scaleCurrent + ");" +
					"-o-transform:      translate3d(" + delta + "px,0px, 0px) scale(" + scaleCurrent + ");" +
					"transform:   		translate3d(" + delta + "px,0px, 0px) scale(" + scaleCurrent + ");"
				);
				next
					.removeClass("stopped")
					.attr("style",
					"-webkit-transform: translate3d(" + nextDelta + "px,0px, 0px) scale(" + scaleNext + ");" +
					"-moz-transform:    translate3d(" + nextDelta + "px,0px, 0px) scale(" + scaleNext + ");" +
					"-ms-transform:     translate3d(" + nextDelta + "px,0px, 0px) scale(" + scaleNext + ");" +
					"-o-transform:      translate3d(" + nextDelta + "px,0px, 0px) scale(" + scaleNext + ");" +
					"transform:   		translate3d(" + nextDelta + "px,0px, 0px) scale(" + scaleNext + ");"
				);
				prev
					.removeClass("stopped")
					.attr("style",
					"-webkit-transform: translate3d(" + prevDelta + "px,0px, 0px) scale(" + 1 + ");" +
					"-moz-transform:    translate3d(" + prevDelta + "px,0px, 0px) scale(" + 1 + ");" +
					"-ms-transform:     translate3d(" + prevDelta + "px,0px, 0px) scale(" + 1 + ");" +
					"-o-transform:      translate3d(" + prevDelta + "px,0px, 0px) scale(" + 1 + ");" +
					"transform:   		translate3d(" + prevDelta + "px,0px, 0px) scale(" + 1 + ");"
				);
			};

			$scope.prevItem = function(evt) {
				direction = "prev";
				var delta = evt.deltaX;
				current = angular.element(evt.target);
				prev = angular.element(document.querySelector(".prev-item"));
				var scaleCurrent = (current[0].clientWidth / 2 - Math.abs(delta)) / (current[0].clientWidth / 2);
				scaleCurrent = scaleCurrent > 1 ? 1 : scaleCurrent;
				var scaleNext = 1 + scaleCurrent;
				distance = scaleCurrent;

				var nextDelta = current[0].clientWidth + delta;
				var prevDelta = delta - current[0].clientWidth;

				current
					.removeClass("stopped")
					.attr("style",
					"-webkit-transform: translate3d(" + delta + "px,0px, 0px) scale(" + scaleCurrent + ");" +
					"-moz-transform:    translate3d(" + delta + "px,0px, 0px) scale(" + scaleCurrent + ");" +
					"-ms-transform:     translate3d(" + delta + "px,0px, 0px) scale(" + scaleCurrent + ");" +
					"-o-transform:      translate3d(" + delta + "px,0px, 0px) scale(" + scaleCurrent + ");" +
					"transform:   		translate3d(" + delta + "px,0px, 0px) scale(" + scaleCurrent + ");"
				);
				next
					.removeClass("stopped")
					.attr("style",
					"-webkit-transform: translate3d(" + nextDelta + "px,0px, 0px) scale(" + 1 + ");" +
					"-moz-transform:    translate3d(" + nextDelta + "px,0px, 0px) scale(" + 1 + ");" +
					"-ms-transform:     translate3d(" + nextDelta + "px,0px, 0px) scale(" + 1 + ");" +
					"-o-transform:      translate3d(" + nextDelta + "px,0px, 0px) scale(" + 1 + ");" +
					"transform:   		translate3d(" + nextDelta + "px,0px, 0px) scale(" + 1 + ");"
				);
				prev
					.removeClass("stopped")
					.attr("style",
					"-webkit-transform: translate3d(" + prevDelta + "px,0px, 0px) scale(" + scaleNext + ");" +
					"-moz-transform:    translate3d(" + prevDelta + "px,0px, 0px) scale(" + scaleNext + ");" +
					"-ms-transform:     translate3d(" + prevDelta + "px,0px, 0px) scale(" + scaleNext + ");" +
					"-o-transform:      translate3d(" + prevDelta + "px,0px, 0px) scale(" + scaleNext + ");" +
					"transform:   		translate3d(" + prevDelta + "px,0px, 0px) scale(" + scaleNext + ");"
				);
			};

			$scope.stop = function(evt) {
				$timeout(function() {
					$scope.display = direction === "prev" ? $scope.display -= 1 : $scope.display += 1;

					//prev
					//	.addClass("stopped")
					//	.attr("style", "");
					//next.
					//	addClass("stopped")
					//	.attr("style", "");
					//current
					//	.addClass("stopped")
					//	.attr("style", "");
					//
					////if (distance > 0.6) {
					////	return;
					////}
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