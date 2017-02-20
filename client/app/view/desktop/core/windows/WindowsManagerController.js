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
    createWindow: function () {
        var window1 = Ext.create('Desktop.view.desktop.core.windows.Window');
        //Ext.WindowManager.register(window1);
        var winInfos = new Object();
        winInfos.title = window1.title;
        winInfos.id = window1.id;
        this.showWindow(window1.id);
        this.fireEvent('createWindows', winInfos);
    },
    hideWindow: function (id) {

    },
    showWindow: function (id) {
        var win = Ext.WindowManager.get(id);
        console.log('win id',win);
        //win.show();
        //Ext.WindowMgr.bringToFront(win);
        //win.maximize();
    }
});


