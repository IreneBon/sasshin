'use strict';

angular.module('starter')
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
    
.controller('ImagesListCtrl', function($scope, $stateParams, Images) {
  var imgD = [];
        Images.query(function(data){
        $scope.imagenes = data;
		
		  for (var i = 0; i < data.length; i++) {
		    /*if(data[i].category_id == $stateParams.playlistId){
		      imgD.push(data[i]);
		      console.log(imgD[i]);
		    }*/
		  };
  		//$scope.images = imgD;
        });
});;
