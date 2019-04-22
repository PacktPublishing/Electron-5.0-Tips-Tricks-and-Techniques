const path = require('path');
const LOGS_PATH = path.resolve('logs/error.log');
const logger = require('pino')({ level: 'error' }, LOGS_PATH);

const { ipcMain } = require('electron');
//Handler Render Process Exceptions
ipcMain.on('renderingError', (event, err, lineno, colno) => {
    console.error('Rendering Error: ', err, lineno, colno);
    logger.error('Rendering Error: ' + err, lineno, colno);
});

/**
 * Log Levels
 * 1-trace
 * 2-debug
 * 3-info
 * 4-warn
 * 5-error
 * 5-fatal
 */
