angular.module('starter.services', [])

.factory('ProductItems',function(){
  var productItems = [
    { id: 2, name: 'Product Item'}
  ];

    return {
    all: function() {
      return productItems;
    },
    get: function(productItemId) {
      // Simple index lookup
      return productItems.filter(function(data){
        return data.id == productItemId
      })[0];
    }
  }
})
