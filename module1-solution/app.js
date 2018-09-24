(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.message = "";
  $scope.lunchMenuItems = "";

  $scope.updateMessage = function() {
    var numItems = countLunchItems($scope.lunchMenuItems);

    if (numItems === 0)
      $scope.message = "Please enter data first"
    else {
      if (numItems <= 3)
        $scope.message = "Enjoy!";
    else
        $scope.message = "Too much!";
    }
  };

  function countLunchItems(items) {
      if (items.length == 0) return 0;

      var myitems = items.split(',');
      return myitems.length;
  }
}

})();
