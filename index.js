const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', ( )  => {
    mainWindow  = new BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            nodeIntegration: true // habilita o uso do Node.js no contexto da página
        }
        
    });
    
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Evento emitido quando a janela é fechada
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});