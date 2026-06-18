const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {

  const window = new BrowserWindow({
    width: 1100,
    height: 800,
    minWidth: 900,
    minHeight: 650,

    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  window.loadFile(
    path.join(__dirname, "..", "index.html")
  );

  // Optional during development
  // window.webContents.openDevTools();
}

app.whenReady().then(() => {

  createWindow();

  app.on("activate", () => {

    if (
      BrowserWindow.getAllWindows().length === 0
    ) {

      createWindow();

    }

  });

});

app.on("window-all-closed", () => {

  if (process.platform !== "darwin") {

    app.quit();

  }

});