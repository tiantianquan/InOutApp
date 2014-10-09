angular.module('InOutApp')

.controller('HomeCtrl', function($scope, $location, $timeout,$ionicModal) {
  $scope.$root.searchShow = true;
  $scope.$root.$broadcast('showTabs');

  $scope.doRefresh = function(){
    $timeout(function(){
      $scope.$broadcast('scroll.refreshComplete');
    },1000)
  };

  $scope.$on('$destroy', function() {
    $scope.$root.searchShow = false;
    $scope.$root.$broadcast('hideTabs');
  });
})