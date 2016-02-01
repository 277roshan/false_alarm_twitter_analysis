
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');



app.listen(8300);



// var express = require('express');
// var EJS  = require('ejs');
// //This sets up our app as a basic express server.
// var app = express();
// app.set('view engine','ejs');
// // appe.set('view engine', 'ejs');
// //Let's set up a port for our server to listen on
// var port = 8300;
//Just one basic server response, to make sure our server is working.
// app.get('/*', function(req, res){  
//   res.send('Hello World');
// });


function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

//Now lets set up a twitter account from dev.twitter.com

 

//Find these in your applications API Keys tab
var Twitter = require('twitter');
 


 
var client = new Twitter({
  consumer_key:'I4mFwvHxDXs6tYIoQ15kWSMEa',
    consumer_secret:'n0B2Z6T4fYAOv1cnPXwQd7r6Sd8inmBSHcgOQ7IYJ4dV3HWpQ7',
    access_token_key:'149006328-GbCda82JmUKsmDMCdwqhSBHBRgf2GdAOtYZxrDfl',
    access_token_secret:'oPjgq9lkWfsqZOQ2PTQNRe1EH8ANYuAoFMwb9LHIYj4yg'
});

var current_tweet = ''
var number_of_tweets = 0
var all_tweets = []
var tweetdemanded = ""


io.sockets.on('connection', function (socket) {
  socket.emit('message', 'You are connected!');

  socket.on('message', function(message){
    number_of_tweets = 0
     tweetdemanded = message;
    client.stream('statuses/filter', {track: tweetdemanded}, function(stream) {
         stream.on('data', function(tweet) {
         current_tweet = tweet
         all_tweets.push(current_tweet)
         if (all_tweets.length>100)
         {
          all_tweets.pop()
         } 

         number_of_tweets = number_of_tweets +1
          console.log(number_of_tweets)

         });
 
        stream.on('error', function(error) {
        throw error;
        });
    });

  });
});




setInterval(function() {
  // method to be executed;
  io.sockets.emit('news', { hello: current_tweet ,number_of_tweets: number_of_tweets});
}, 5000);

 




//basic-server.js

// //We require express to use all of its useful features, and to make writing node a lot easier



//   io.on('connection', function (socket) {
//   socket.emit('news', { hello: current_tweet });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });








// var io = require('socket.io').listen(server);






//  io.sockets.on('connection', function (socket) {
//     console.log('A new user connected!');
//     socket.emit('info', { msg: 'The world is round, there is no up or down.' });
// });



// // client.stream('search/tweets.json?q=%23fire&src=typd', params, function(error, tweets, response){
// //   if (!error) {

    
// //     for (x = 0; x < tweets.statuses.length; x++){

// //       console.log(tweets.statuses[x].text);
// //       console.log("    ");
// //     }
// //     console.log(tweets.search_metadata.count);


//     // app.get('/',function(req,res){
//     //   res.render('index',{x:"sasddssssssdf"});
//     //   //res.send(tweets);
//     // });
// //   }
// // });








