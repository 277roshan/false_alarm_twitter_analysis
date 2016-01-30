
//basic-server.js

//We require express to use all of its useful features, and to make writing node a lot easier
var express = require('express');

//This sets up our app as a basic express server.
var app = express();

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
client.get('friends/ids', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);

    app.get('/*',function(req,res){
        res.send(tweets);
    });
  }
});






