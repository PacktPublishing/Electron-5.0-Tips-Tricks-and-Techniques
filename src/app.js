require("./render/config");
import "./render/loadData";
//React, Vanilla Javascript ES6 ESNext

const { ipcRenderer } = require("electron");
import { promisify } from "util";

ipcRenderer.send("getUserSettings");
ipcRenderer.on("userSettingsRes", (event, data) => {
  console.log("User Data: ", data);
});
