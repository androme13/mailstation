/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Desktop.desktop.core.taskbar.Taskbar', {
    requires: [
        'Desktop.desktop.core.startmenu.Startmenu',
        'Desktop.desktop.core.taskbar.Trayclock',
        'Desktop.desktop.core.taskbar.TaskbarController'
    ],
    extend: 'Ext.panel.Panel',
    xtype: 'app-main-taskbar',
    itemId: 'app-main-taskbar',
    //margins: '0,0,0,0',
    //padding: '0,0,10,10',
    controller: 'taskbar',
    items: [{
            layout: 'hbox',
            items: [
                {
                    xtype: 'button',
                    text: 'Menu',
                    enableToggle: true,
                    border: 0,
                    handler: 'toggle'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'deskclock',
                    padding: '7,5,0,0'
                }
            ]
        }],
    listeners: {
        added: function () {
            StartMenu = Ext.create('Desktop.desktop.core.startmenu.Startmenu', {
                floating: true,
            });
        },
        refreshStartMenu: function () {
            this.controller.refreshStartMenufunc();
        },
        beforedestroy: function () {
            console.log(this.items);
            StartMenu.destroy();
        }

    }
});