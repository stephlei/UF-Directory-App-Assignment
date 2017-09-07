/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.Promise = global.Promise;

mongoose.connect(config.db.uri,{ useMongoClient: true });

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({name:'Library West'},function(error,listing){
    if(error)
      throw error;
    console.log(listing);
   }
)};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndRemove({code:'CABL'},function(error,listing){
    if(error)
      throw error;
    
      console.log('Successfully removed!');
    });
   
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({name:'Phelps Laboratory'},{address:'1953 MUSEUM RD GAINESVILLE, FL 32611'},
    function(error,listing){
      if(error)
        throw error;
      console.log(listing);
      console.log("Successfully updated!");
    });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
  */
  Listing.find({}, function(err, Listing) {
    if (err) throw err;
    console.log(Listing);
  })
};
findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();


