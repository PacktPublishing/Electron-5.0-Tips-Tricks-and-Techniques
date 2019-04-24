const electron = require("electron");
require("./main/settings");
// Module to control application life.
const app = electron.app;
const dialog = electron.dialog;

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const BrowserView = electron.BrowserView;

const path = require("path");
const url = require("url");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

let template;

const { toggleAppMenu } = require("./main/menu");

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 1280, height: 768, 
    webPreferences: { nodeIntegration: true }}); ///< API Change 
  //Creating Custom Menu 
  toggleAppMenu(1);
  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "..", "dist/index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  //Export Main Window
  exports.mainWindow = mainWindow;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => { 
  createWindow(); 
  require("./main/bootstrap");
});

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
    require("./main/bootstrap");
  }
});

/* Creates a New Browser Window and returns the Handler */
exports.createNewWindow = (
  page,
  config = { width: 1280, height: 768 },
  parentWD = mainWindow
) => {
  //Error Handling
  var init = true;
  try {
    if (!parentWD) throw new Error("ParentWindowNULL");
  } catch (err) {
    init = false;
    dialog.showErrorBox("Warning!", err);
  }

  if (parentWD == "standalone") parentWD = null;

  if (init) {
    var newWindow = new BrowserWindow({
      config,
      parent: parentWD,
      modal: true
    });

    newWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, page),
        protocol: "file:",
        slashes: true
      })
    );

    return newWindow;
  }

  return null;
};

//Secure isolated windows and browser views 
function createWindowSafe(title, url, options = {}) {
  //Disable nodeintegration (Electron 5.0 b default has nodeintegration disabled)
  const win = new BrowserWindow({ title: title, ...options, 
    webPreferences: { nodeIntegration: false, contextIsolation: true, 
      enableRemoteModule: false } });
  //Now, Load URL Safely 
  win.loadURL(url);
}
module.exports.createSafeWindow = createWindowSafe;


//Updater 
require("./main/updater");