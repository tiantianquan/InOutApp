angular.module('InOutApp')
.controller('ProductItemCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate,ProductItems) {
  $scope.productItem = ProductItems.get($stateParams.productItemId);
})