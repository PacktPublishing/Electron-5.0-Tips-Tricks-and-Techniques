const { ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

const { promisify } = require("util");

ipcMain.on("getUserSettings", async (event) => {
  console.log("Received");
  //Read User's Settings 
  /*fs.readFile(path.resolve("./resources/settings.json"), (err, settings) => {
    if(err)
    return console.error("Cannot open settings file");
    event.sender.send("userSettingsRes", JSON.parse(settings.toString()));
  });*/

  //Promise Based 
  const readFilePm = promisify(fs.readFile);
  const settings = await readFilePm(path.resolve("./resources/settings.json")).catch((err) => {
    return console.error("Cannot open settings file");
  });
  if(settings)
    event.sender.send("userSettingsRes", JSON.parse(settings.toString()));

});






