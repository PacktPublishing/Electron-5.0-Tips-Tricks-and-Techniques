require("./render/config");
import "./render/loadData";
//React, Vanilla Javascript ES6 ESNext

const { ipcRenderer } = require("electron");

//ipcRenderer.send("IPCEvent", "Event Dispatched");

function handleErr(err, lineno, colno) {
  ipcRenderer.send("renderingError", err, lineno, colno);
}

setTimeout(() => {
  //Dispatch Exception to the Main Process
  handleErr("Some Exceptions has been Thrown", 13, 0);

}, 3000);

//Global Exceptions and Errors
//Registered on the GLOBAL window object
window.onerror = (event, source, lineno, colno, err) => {
  handleErr(err, lineno, colno);
}







