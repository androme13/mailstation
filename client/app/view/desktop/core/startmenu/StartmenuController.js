/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.startmenu.StartmenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.startmenu',
    init: function () {
        console.log("startmenu controller init");
        /*{
         xtype: 'button',
         text: 'Routage',
         handler: 'showWindow'
         // width : 150
         //  xtype: 'button',
         //   text: 'start',
         //handler: 'toggle'
         }*/

        console.log(this.view);
        var programsSpace = this.view.query('[itemId=programsSpace]');
        console.log('query:', programsSpace);
    },
    onLogout: function () {
        this.fireEvent('logoutEvent');
    },
    showWindow: function (menu) {
        this.fireEvent('showWindow',menu.path);
    }
});

