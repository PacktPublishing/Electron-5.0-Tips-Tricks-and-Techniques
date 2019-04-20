/*Secure Configuration*/ 
const app = require("electron").app;
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


const BrowserView = require("electron").BrowserView;
const mainWin = require("../index").mainWindow;
const url = require("url");
const path = require("path");

//Electron 5.0 by default has nodeIntegration disabled!
const isolatedView =  new BrowserView({ webPreferences: { nodeIntegration: false, contextIsolation: true } });
//Load External Resource whish has a melicious Script 
//(in this case we use a local script to simulate a remote resource)
mainWin.setBrowserView(isolatedView); 
isolatedView.setBounds({ x: 0, y: 0, width: mainWin.getBounds().width, height: mainWin.getBounds().height });
isolatedView.webContents.loadURL(    url.format({
  pathname: path.join(__dirname, "../..", "externalContent/malicious.html"),
  protocol: "file:",
  slashes: true
}));

