const { Menu, BrowserView } = require("electron");

const menu1Template =  [
  {
    label: "File",
    submenu: [{ label: "New Project", role: "New" }, { role: "Save" }]
  },
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "past" },
      { role: "reload" }
    ]
  },
  { label: "View", submenu: [{ role: "toggledevtools" }] }
];
const menu2Template = [
  {
    label: "File",
    submenu: [{ label: "New Project", role: "New" }, { role: "Save" }]
  },
  {
    label: "Edit",
    submenu: [
      { role: "reload" }
    ]
  },
  { label: "About", submenu: [{ label: "Terms" }] }
];
module.exports.toggleAppMenu = (menuIdx) => {
  let menu = null;
  if(menuIdx === 1)
    menu = Menu.buildFromTemplate(menu1Template);
  else if (menuIdx === 2)
    menu = Menu.buildFromTemplate(menu2Template);
  Menu.setApplicationMenu(menu);
}
