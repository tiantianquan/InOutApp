// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('InOutApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: "js/tabs/tabs.template.html",
    controller: "TabCtrl"
  })

  // Each tab has its own nav history stack:
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'js/home/home.template.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.product-item', {
    url: '/home/product/:productItemId',
    views: {
      'tab-home': {
        templateUrl: 'js/product/product.template.html',
        controller: 'ProductItemCtrl'
      }
    }
  })


  .state('tab.search', {
    url: '/home/search',
    views: {
      'tab-home': {
        templateUrl: 'js/home/search/search.template.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'js/account/account.template.html',
        controller: 'AccountCtrl'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

})

//照相相关
.config(function($compileProvider) {
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

//允许跨站
// .config(['$httpProvider',
//   function($httpProvider) {
//     // ...

//     // delete header from client:
//     // http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api
//     $httpProvider.defaults.useXDomain = true;
//     delete $httpProvider.defaults.headers.common['X-Requested-With'];
//   }
// ]);
angular.module('InOutApp')

.directive('hideTabs', function() {
  return {
    restrict: 'A',
    // scope:{},
    link: function(scope, element, attr) {
      scope.$root.$on('hideTabs',function(){
        element.addClass('tabs-item-hide');
      });

      scope.$root.$on('showTabs',function(){
        element.removeClass('tabs-item-hide');
      })
    }
  }
})
angular.module('InOutApp')

.factory('ProductItems', function() {
  var productItems = [{
    id: 2,
    name: 'Product Item'
  }];

  return {
    all: function() {
      return productItems;
    },
    get: function(productItemId) {
      // Simple index lookup
      return productItems.filter(function(data) {
        return data.id == productItemId
      })[0];
    }
  }
})

//照相
.factory('Camera', ['$q',
  function($q) {

    return {
      getPicture: function(options) {
        var q = $q.defer();

        navigator.camera.getPicture(function(result) {
          // Do any magic you need
          q.resolve(result);
        }, function(err) {
          q.reject(err);
        }, options);

        return q.promise;
      }
    }
  }
])


// .factory('Pokeman', function($http) {

//   return {
//     all: function(callback) {
//       return $http.get('http://192.168.2.70:5000/list').success(function(data,status){
//         callback(data,status)
//       });
//     }
//   }
// })
angular.module('InOutApp')

.controller('AccountCtrl', function($scope) {
  $scope.$root.$broadcast('showTabs');
})

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
angular.module('InOutApp')
.controller('ProductItemCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate,ProductItems) {
  $scope.productItem = ProductItems.get($stateParams.productItemId);
})
angular.module('InOutApp')
.controller('SellCtrl', function($scope, Friends) {

})
angular.module('InOutApp')

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
angular.module('InOutApp')
.controller('SearchCtrl', function($scope) {})