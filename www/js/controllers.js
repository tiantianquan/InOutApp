angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $location, $ionicModal) {
  $scope.$root.searchShow = true;
  $scope.$on('$destroy', function() {
    $scope.$root.searchShow = false;
  })


})

.controller('SellCtrl', function($scope, Friends) {

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {})

.controller('AccountCtrl', function($scope) {})

.controller('SearchCtrl', function($scope) {})

.controller('ProductItemCtrl', function($scope, $stateParams, ProductItems) {
  $scope.productItem = ProductItems.get($stateParams.productItemId);
})

.controller('TabCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/tab-sell.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
});