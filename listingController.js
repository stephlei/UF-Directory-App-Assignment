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

    $scope.deleteListing = function(listing) {
    	 $scope.listings.splice($scope.listings.indexOf(listing), 1);
    	  $scope.showInfo=false;
    };
    $scope.showDetails = function(listing) {
    	if(!$scope.showInfo)
    		$scope.showInfo=true;

    	$scope.name=listing.name;
    	$scope.code=listing.code;

    	if("address" in listing)
    		$scope.address=listing.address;
    	else
    		$scope.address="No available address";

    	if("coordinates" in listing){
    		$scope.latitude=listing.coordinates.latitude;
    		$scope.longitude=listing.coordinates.longitude;
    	}
    	else {
    		$scope.latitude="No available latitude";
    		$scope.longitude="No available longitude";
    	}

    };
  }
]);