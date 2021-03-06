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