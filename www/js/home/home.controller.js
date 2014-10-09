angular.module('InOutApp')

.controller('HomeCtrl', function($scope, $location, $timeout) {
  $scope.$root.searchShow = true;
  $scope.$root.$broadcast('showTabs');

  //刷新
  $scope.doRefresh = function(){
    $timeout(function(){
      $scope.$broadcast('scroll.refreshComplete');
    },1000)
  };

  //触发退出
  $scope.$on('$destroy', function() {
    $scope.$root.searchShow = false;
    $scope.$root.$broadcast('hideTabs');
  });
})
