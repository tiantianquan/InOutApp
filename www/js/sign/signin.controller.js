angular.module('InOutApp')
.controller('SignInCtrl',function($scope,$state){

  $scope.signIn = function(){
    $state.go('tab.home');
  }
})