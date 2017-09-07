angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.showInfo = false;
    $scope.addItem=false;


    $scope.addListing = function() {
    	$scope.listings.push({"code":$scope.listing.code, "name":$scope.listing.name,
    						"address":$scope.listing.address,
    						"coordinates":{"latitude":$scope.listing.latitude,"longitude":$scope.listing.longitude}
    						 });
    	$scope.addItem=false;
    	$scope.listing=undefined;
    };

    $scope.addClicked=function(){
    		$scope.addItem=!$scope.addItem;
    	};

    $scope.deleteListing = function(index) {
    	  $scope.listings.splice(index,1);
    	  $scope.showInfo=false;
    };
    $scope.showDetails = function(index) {
    	if(!$scope.showInfo)
    		$scope.showInfo=true;

    	$scope.name=$scope.listings[index].name;
    	$scope.code=$scope.listings[index].code;

    	if("address" in $scope.listings[index])
    		$scope.address=$scope.listings[index].address;
    	else
    		$scope.address="No available address";

    	if("coordinates" in $scope.listings[index]){
    		$scope.latitude=$scope.listings[index].coordinates.latitude;
    		$scope.longitude=$scope.listings[index].coordinates.longitude;
    	}
    	else {
    		$scope.latitude="No available latitude";
    		$scope.longitude="No available longitude";
    	}

    };
  }
]);