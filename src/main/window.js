const { BrowserWindow } = require("electron");

//Secure isolated windows and browser views 
function createSafeWindow(title, url, options = {}) {
  //Disable nodeintegration (Electron 5.0 b default has nodeintegration disabled)
  const win = new BrowserWindow({ title: title, ...options, 
    webPreferences: { nodeIntegration: false, contextIsolation: true, 
      enableRemoteModule: false } });
  //Now, Load URL Safely 
  win.loadURL(url);
  return win;
}
module.exports.createSafeWindow = createSafeWindow;