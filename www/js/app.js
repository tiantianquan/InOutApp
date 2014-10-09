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

  //注册与登陆
  .state('signin', {
    url: '/sign-in',
    templateUrl: 'js/sign/signin.template.html',
    controller: 'SignInCtrl'
  })
  // .state('forgotpassword', {
  //   url: '/forgot-password',
  //   templateUrl: 'templates/forgot-password.html'
  // })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/sign-in');

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

//配置avos key id
.config(function() {
  AV.initialize(AVOS_ID, AVOS_KEY);

  AV.User.logIn("my name", "my pass", {
    success: function(user) {

      var GameScore = AV.Object.extend("GameScore");
      var query = new AV.Query(GameScore);
      query.get("543691e8e4b06664ddb43996", {
        success: function(gameScore) {
        },
        error: function(object, error) {
          console.log(error)
        }
      });
    },
    error: function(user, error) {
      // The login failed. Check error to see why.
    }
  });

  // var GameScore = AV.Object.extend("GameScore");

  // // 创建该类的一个实例
  // var gameScore = new GameScore();

  // gameScore.set('aaa','123');
  // gameScore.setACL(new AV.ACL(AV.User.current()));
  // gameScore.save();


  var currentUser = AV.User.current();
  if (currentUser) {
    console.log(currentUser);
  } else {
    console.log('error');
  }

  



})


//常量
AVOS_ID = "5ikmya9zrrfimdl456y3yox57e4l7fgfxactyy57c3qo5w0h";
AVOS_KEY = "x0uwyco97txu3b3x52kfzjkknfkil9ap9kb6ouwo3r9k9ay5";