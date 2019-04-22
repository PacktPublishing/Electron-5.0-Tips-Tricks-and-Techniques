const { createSafeWindow } = require("../../src/main/window");

test("is it Electron 5", () => {
  expect(process.versions.electron).toMatch(/5.*$/);
})

test("is Window Started", () => {
  const win = createSafeWindow("Test Win", "https://google.com/");
  win.show();
  //Test using jest
  expect(win).toBeDefined();
});