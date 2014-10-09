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