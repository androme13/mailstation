/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.taskbar.WindowsListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.windowslist',
    init: function () {
        console.log("WindowsList controller init");
    },
    listen: {
        controller: {
            'windowsmanager': {
                createWindows: 'addWindowsButton'
            }
        }
    },
    addWindowsButton: function (winInfos) {
        var button = Ext.create('Ext.Button', {
            text: winInfos.title,
            winId: winInfos.id,
            listeners: {
                click: 'buttonClick'
            }
        });
        this.view.add(button);
    },
    removeWindowsButton: function () {

    },
    buttonClick: function (but) {
        console.log(but);
    }

});
