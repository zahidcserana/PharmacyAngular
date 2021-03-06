const { app, BrowserWindow } = require('electron');
let win;
function createWindow() {
  // Create the browser window.
  // win = new BrowserWindow({ width: 1200, height: 800 });

  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: 1200,
    height: 800,
    // frame: false,
    webPreferences: {
      nativeWindowOpen: true, // add this
      nodeIntegration: false
    }
  });
  win.setMenuBarVisibility(false);
  // and load the index.html of the app. 
  win.loadFile(`./dist/myApp/index.html`);
  win.maximize();
  // Open the DevTools.
  //win.webContents.openDevTools();
  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
};
// This method will be called when Electron has finished   
// initialization and is ready to create browser windows.   
// Some APIs can only be used after this event occurs.   
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {

  // On macOS it is common for applications and their menu bar     
  // to stay active until the user quits explicitly with Cmd + Q     
  if (process.platform !== 'darwin') { app.quit() }
});
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the     
  // dock icon is clicked and there are no other windows open.     
  if (win === null) { createWindow() }
});   
