'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.Promise = global.Promise;

mongoose.connect(config.db.uri,{useMongoClient:true});

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
fs.readFile('./listings.json', 'utf8', function (err,data) {

    console.log("importing data");
    var i;
    var dataList=JSON.parse(data);
    var length=Object.keys(dataList.entries).length;

    for(i = 0; i < length ; i++) {
        var newListing = new Listing(dataList.entries[i]).save(function (err) {
          if (err) throw err;
        });
    }
});

mongoose.disconnect();



  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */