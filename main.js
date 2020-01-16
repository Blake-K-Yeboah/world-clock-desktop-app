const { app, BrowserWindow } = require('electron')

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 1280,
        height: 720,
        backgroundColor: '#111111',
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname + 'icon.ico'
    })

    // and load the index.html of the app.
    win.loadFile('index.html')
}

app.on('ready', createWindow)