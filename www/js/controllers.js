angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('SellCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('SearchCtrl', function($scope){
});
