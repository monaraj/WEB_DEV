
// //without call bck function when we request to the server 
// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if(error)
//  console.error('error:', error); // Print the error if one occurred
//   else
//   {
//       console.log('body:', body); // Print the HTML for the Google homepage.
//   }
//     });
//  console.log("************************");
 //after adding call back function to the request
    const request = require('request');
request('http://www.google.com',cb);
 function cb (error, response, body) {
  if(error)
 console.error('error:', error); // Print the error if one occurred
  else
  {
      console.log('body:', body); // Print the HTML for the Google homepage.
  }
    };
