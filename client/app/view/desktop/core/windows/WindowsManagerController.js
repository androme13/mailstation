/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.windows.WindowsManagerController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.windowsmanager',
    requires: [
        'Desktop.view.desktop.core.windows.Window'
    ],
    init: function () {
        console.log("windowsmanager controller init");
    },
    listen: {
        controller: {
            'windowslist': {
                hideWindow: 'hideWindow',
                showWindow: 'showWindow'
            },
            'window': {
                minimizeWin: 'hideWindow',
            }
        }
    },
    createWindow: function () {
        var window = Ext.create('Desktop.view.desktop.core.windows.Window');
        // on lance l'event pour la création du bouton géré par windowlistcontroller
        this.fireEvent('createWindows', window);
    },
    hideWindow: function (id) {
        var win = Ext.WindowManager.get(id);
        if (win)
            win.hide();

    },
    showWindow: function (id) {
        var win = Ext.getCmp(id);
        if (win)
            win.show();
    }
});


