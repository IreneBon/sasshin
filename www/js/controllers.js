angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 10000);
  };
})

 .controller('CategoryListCtrl', function($location, $scope, Category) {
        Category.query(function(data){
            $scope.categories = data;
      //console.log($scope.categories);
        });

    })

.controller('ItemListCtrl', function($scope, $stateParams, Items) {
  var itemarray = [];
        Items.query(function(data){
      for (var i = 0; i < data.length; i++) {
        if(data[i].category_id == $stateParams.playlistId){
          itemarray.push(data[i]);
        }
      }; 
      $scope.items = itemarray;
      $scope.categoryTitle = $stateParams.playlistId; //utiliza un parametro anterior
      //console.log($scope.items);
        });
})
    
.controller('ImagesListCtrl', function($location, $scope, $stateParams, Imagenes) {
  var imgarray = [];
        Imagenes.query(function(data){
        
        console.log($stateParams.itemid);
    
      for (var i = 0; i < data.length; i++) {
        if(data[i].item_id == $stateParams.itemid){
          console.log(data[i].item_id);
          imgarray.push(data[i]);
        }
      };
      $scope.imagenes = imgarray;
        });
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})

;

