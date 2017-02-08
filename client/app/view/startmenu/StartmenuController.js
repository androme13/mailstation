/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.startmenu.StartmenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.startmenu',
    init: function () {
        console.log("startmenu controller init");
    },
    onLogout: function () {
        this.fireEvent('logoutEvent');
    }
});

