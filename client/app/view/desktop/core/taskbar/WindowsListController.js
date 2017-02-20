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
    addWindowsButton: function (window) {
        var button = Ext.create('Ext.Button', {
            text: window.title,
            tooltip: window.title,
            border: 0,
            enableToggle: true,
            winId: window.id,
            pressed: true,
            listeners: {
                click: 'buttonClick'
            }
        });
        this.view.add(button);
        window.animateTarget = button;
        // une fois le bouton crée on peut lancer l'event de la création du 
        // window géré par windowmanagercontroller
        this.fireEvent('showWindow',window.id);
    },
    removeWindowsButton: function () {

    },
    buttonClick: function (but) {
        if (but.pressed===false)
            this.fireEvent('hideWindow', but.winId);
        else
            this.fireEvent('showWindow', but.winId);
        console.log(but);
    }
});
