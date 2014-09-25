angular.module('starter.controllers', [])

.controller('HomeCtrl', function ($scope,$location) {
  $scope.$root.searchShow = true;
  $scope.$on('$destroy',function(){
    $scope.$root.searchShow = false;
  })

  $scope.click = function(){
    $location.path('tab/home/product/2')
  }
})

.controller('SellCtrl', function ($scope, Friends) {

})

.controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
})

.controller('AccountCtrl', function ($scope) {
})

.controller('SearchCtrl', function ($scope) {
})

.controller('ProductItemCtrl',function($scope,$stateParams, ProductItems){
  $scope.productItem = ProductItems.get($stateParams.productItemId);
});
