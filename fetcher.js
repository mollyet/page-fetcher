const request = require("request");
const fs = require('fs');
const input = process.argv.slice(2);
const url = input[0];
const path = input[1];

request(url, (error, response, body) => {
  if (error) {
    console.log("terrible request, try again ", error);
    return;
  }
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(path, body, (error) => {
    if(error){
      console.log("uh oh! an error! yikes! ", error);
      return;
    }
   console.log(`downloaded and saved ${body.length} bytes to ${path}`); 
  });
}); 



