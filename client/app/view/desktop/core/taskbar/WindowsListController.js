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
            },
            'window': {
                gotFocus: 'windowGetFocus',
                looseFocus: 'windowLooseFocus',
                windowMinimize: 'windowMinimize'
            }
        },
    },
    activate: function (but) {
        this.fireEvent('activateWindow', but.winId);
        console.log('activate');
    },
    addWindowButton: function (window) {
        var me = this;
        var buttonContextMenu = new Ext.menu.Menu({
            items: [
                {
                    text: 'Maximiser',
                    handler: this.maximizeByContextMenu
                },
                {
                    text: 'Minimiser',
                    handler: this.minimizeByContextMenu
                },
                '-',
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
            toggleGroup: 'WLC',
            border: 0,
            margin: "0 5 0 0",
            enableToggle: true,
            winId: window.id,
            pressed: true,
            listeners: {
                click: function (but) {
                    this.up().controller.activate(but);
                    this.up().up().up().fireEvent('activateWindow', but.winId);
                    this.setPressed(true);
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
        //this.fireEvent('showWindow', window.id);
    },
    removeWindowButton: function (id) {
        var buttons = this.view.query('[winId=' + id.toString() + ']');
        buttons[0].destroy();
    },
    closeByContextMenu: function (item) {
        var button = Ext.getCmp(item.up().buttonParent);
        button.up().getController().fireEvent('closeWindow', button.winId);
    },
    maximizeByContextMenu: function (item) {
        var button = Ext.getCmp(item.up().buttonParent);
        var menuText = this.text;
        if (menuText === 'Maximiser')
        {
            button.up().getController().fireEvent('maximizeWindow', button.winId);
            this.setText('Restaurer');
        }
        else
        {
            button.up().getController().fireEvent('restoreFromMaxWindow', button.winId);
            this.setText('Maximiser');
        }
    },
    minimizeByContextMenu: function (item) {
        var button = Ext.getCmp(item.up().buttonParent);
        var menuText = this.text;
        if (menuText === 'Minimiser')
        {
            button.up().getController().fireEvent('minimizeWindow', button.winId);
            this.setText('Restaurer');
        }
        else
        {
            button.up().getController().fireEvent('restoreFromMinWindow', button.winId);
            this.setText('Minimiser');
        }
    },
    windowGetFocus: function (win) {
        var buttons = this.view.query('[winId=' + win.id.toString() + ']');
        buttons[0].setPressed(true);
    },
    windowLooseFocus: function (win) {
        var buttons = this.view.query('[winId=' + win.id.toString() + ']');
        buttons[0].setPressed(false);
    },
    windowMinimize: function (win) {
        var buttons = this.view.query('[winId=' + win.id.toString() + ']');
        var minimizeItem = buttons[0].contextMenu.query('[text=Minimiser]');
        minimizeItem[0].setText('Restaurer');
    }
});
