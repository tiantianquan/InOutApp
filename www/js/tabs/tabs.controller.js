angular.module('InOutApp')

.controller('TabCtrl', function($scope, $ionicModal,Camera) {

  //从下方弹出页面
  $ionicModal.fromTemplateUrl('js/sell/sell.template.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
});