const builder = require('electron-builder');
const Platform = builder.Platform;

const config = {
    appId: 'com.ipenywis.app',
    productName: 'Simple Electron Application',
    directories: {
        output: 'build'
    },
    //Building NSIS for Windows
    nsis: {
        oneClick: false,
        allowToChangeInstallationDirectory: true,
        perMachine: true,
        runAfterFinish: true
    }
};

// Promise is returned
builder
    .build({
        targets: Platform.WINDOWS.createTarget('NSIS'),
        config
    })
    .then(() => {
        console.log('Project Built Successfully');
    })
    .catch(error => {
        console.error('Error, Cannot Build Project', error);
    });
