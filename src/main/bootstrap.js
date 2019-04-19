/*Secure Configuration*/ 

const URL = require('url').URL

//Disable Navigation 
app.on('web-contents-created', (event, contents) => {
  contents.on('will-navigate', (event, navigationUrl) => {
    //Take care of navigation request 
    const parsedUrl = new URL(navigationUrl)

    if (parsedUrl.origin !== 'https://example.com') {
      //Prevent and stop navigation 
      //This could be a hacker or bad injection script tries to navigate 
      //to untrusted sources
      event.preventDefault();
    }
  })
})

//Evaluting custom script 
//THIS IS BAD 
const script = 'console.log("Hello World Bad Script")';
eval(script);