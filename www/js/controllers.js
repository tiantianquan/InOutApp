angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $location, $timeout,$ionicModal,Pokeman) {
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

  Pokeman.all(function(data,status){
    $scope.pokemans = data;
    $scope.pokemans.forEach(function(pokeman){
        pokeman.img = 'img/mainImg/'+pokeman.No.split('#')[1]+pokeman.EName+'.png';
    })
  })
})

.controller('SellCtrl', function($scope, Friends) {

})

.controller('AccountCtrl', function($scope) {
  $scope.$root.$broadcast('showTabs');
})

.controller('SearchCtrl', function($scope) {})

.controller('ProductItemCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate,ProductItems) {
  $scope.productItem = ProductItems.get($stateParams.productItemId);


})

.controller('TabCtrl', function($scope, $ionicModal,Camera) {

  //从下方弹出页面
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


  $scope.getPhoto = function() {
    Camera.getPicture().then(function(imageURI) {
      console.log(imageURI);
      $scope.lastPhoto = imageURI;
    }, function(err) {
      console.err(err);
    }, {
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
    });
  }
});