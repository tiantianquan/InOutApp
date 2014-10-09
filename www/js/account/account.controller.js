angular.module('InOutApp')

.controller('AccountCtrl', function($scope) {
  $scope.$root.$broadcast('showTabs');
})
