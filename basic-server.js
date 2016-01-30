
//basic-server.js

//We require express to use all of its useful features, and to make writing node a lot easier
var express = require('express');


var EJS  = require('ejs');
//This sets up our app as a basic express server.
var app = express();
app.set('view engine','ejs');


// app.set('view engine', 'ejs');




//Let's set up a port for our server to listen on
var port = 8300;


//Just one basic server response, to make sure our server is working.
// app.get('/*', function(req, res){  
//   res.send('Hello World');
// });

//Let's start up our server listening on our port:
var server = app.listen(port, function(){  
  console.log('Basic-server is listening on port ' + port);
});


//Now lets set up a twitter account from dev.twitter.com

 

//Find these in your applications API Keys tab
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key:'I4mFwvHxDXs6tYIoQ15kWSMEa',
    consumer_secret:'n0B2Z6T4fYAOv1cnPXwQd7r6Sd8inmBSHcgOQ7IYJ4dV3HWpQ7',
    access_token_key:'149006328-GbCda82JmUKsmDMCdwqhSBHBRgf2GdAOtYZxrDfl',
    access_token_secret:'oPjgq9lkWfsqZOQ2PTQNRe1EH8ANYuAoFMwb9LHIYj4yg'
});
 
var params = {screen_name: 'nodejs'};

client.stream('statuses/filter', {track: 'firealarm'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});


// client.stream('search/tweets.json?q=%23fire&src=typd', params, function(error, tweets, response){
//   if (!error) {

    
//     for (x = 0; x < tweets.statuses.length; x++){

//       console.log(tweets.statuses[x].text);
//       console.log("    ");
//     }
//     console.log(tweets.search_metadata.count);


//     app.get('/',function(req,res){
//       res.render('index',{x:"sasddssssssdf"});
//       //res.send(tweets);
//     });
//   }
// });








