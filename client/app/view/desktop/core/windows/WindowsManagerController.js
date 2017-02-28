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
                activateWindow: 'activateWindow',
                hideWindow: 'hideWindow',
                maximizeWindow: 'maximizeWindow',
                minimizeWindow: 'minimizeWindow',
                restoreFromMaxWindow: 'restoreFromMaxWindow',
                restoreFromMinWindow: 'restoreFromMinWindow',
                showWindow: 'showWindow',
                closeWindow: 'closeWindow'
            },
            'window': {
                //winMinimize: 'hideWindow',
                winClose: 'winClose'
            }
        }
    },
    activateWindow: function (id) {
        var win = Ext.WindowManager.get(id);
        if (win) {
            Ext.WindowManager.bringToFront(id);
        }
    },
    closeWindow: function (id) {
        var window = Ext.getCmp(id);
        window.close();
    },
    createWindow: function (place) {
        var module = Ext.create('Desktop.view.desktop.core.windows.Window',
        {module:'Desktop.view.modules.emailsrouting.EmailsRouting'});
        var window = place.add(module);
        //var window = place.add(Ext.create('Desktop.view.desktop.core.windows.Window'));

        // on lance l'event pour la création du bouton géré par windowlistcontroller
        this.fireEvent('createWindow', window);
    },
    createWindow2: function (place) {
        var module = Ext.create('Desktop.view.desktop.core.windows.Window',
        {module:'Desktop.view.desktop.core.monitor.Monitor'});
        var window = place.add(module);
        //var window = place.add(Ext.create('Desktop.view.desktop.core.windows.Window'));

        // on lance l'event pour la création du bouton géré par windowlistcontroller
        this.fireEvent('createWindow', window);
    },
    hideWindow: function (id) {
        var win = Ext.WindowManager.get(id);
        if (win)
            win.hide();

    },
    maximizeWindow: function (id) {
        var window = Ext.getCmp(id);
        window.show();
        window.maximize();
    },
    minimizeWindow: function (id) {
        var window = Ext.getCmp(id);
        window.minimize();
    },
    restoreFromMaxWindow: function (id) {
        var window = Ext.getCmp(id);
        console.log('restore');
        window.restore();
    },
    restoreFromMinWindow: function (id) {
        var window = Ext.getCmp(id);
        console.log('restore');
        window.show();
    },
    showWindow: function (id) {
        var win = Ext.getCmp(id);
        if (win) {
            win.show();
        }
    },
    winClose: function (win) {
        // on lance l'event pour la suppression du bouton géré par windowlistcontroller
        this.fireEvent('closeWindow', win.id);
    }
});


