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
                createWindow: 'addWindowButton',
                closeWindow: 'removeWindowButton'
            }
        },
    },
    addWindowButton: function (window) {
        var me = this;
        var buttonContextMenu = new Ext.menu.Menu({
            items: [
                {
                    text: 'Maximiser',
                    // handler: this.closeByContextMenu
                },
                {
                    text: 'Minimiser',
                    //handler: edit
                },
                {
                    text: 'Fermer',
                    handler: this.closeByContextMenu
                }
            ]
        });
        var button = Ext.create('Ext.Button', {
            text: window.title,
            contextMenu: buttonContextMenu,
            tooltip: window.title,
            border: 0,
            enableToggle: true,
            winId: window.id,
            pressed: true,
            listeners: {
                click: function (but) {
                    this.fireEvent('activateWindow', but.winId);
                },
                afterrender: function (button) {
                    button.el.on('contextmenu', function (e) {
                        button.contextMenu.buttonParent = button.id;
                        button.contextMenu.showAt(e.getXY());
                        e.stopEvent();
                    });
                }
            }
        });
        this.view.add(button);
        window.animateTarget = button;
        // une fois le bouton crée on peut lancer l'event de la création du 
        // window géré par windowmanagercontroller
        this.fireEvent('showWindow', window.id);
    },
    removeWindowButton: function (id) {
        var buttons = this.view.query('[winId=' + id.toString() + ']');
        buttons[0].destroy();
    },
    closeByContextMenu: function (item) {
        var button = Ext.getCmp(item.up().buttonParent);
        button.up().getController().fireEvent('closeWindow',button.winId);
    }
});
