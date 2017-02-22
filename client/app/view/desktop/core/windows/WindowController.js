/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.windows.WindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.window',
    init: function () {
        console.log("window controller init");
        //Ext.require('Desktop.view.modules.emailsrouting.EmailsRouting', function () {
        //    console.log('module require');
       // });
        console.log(this);
       // view.items
       //        windowsManager = Ext.create('Desktop.view.desktop.core.windows.WindowsManagerController', {
       // });
        module = Ext.create('Desktop.view.modules.emailsrouting.EmailsRouting',{});
        this.view.add(module);
    },
    minimizeWin: function (win) {
        this.view.hide();
    },
    closeWin: function (win) {
        this.fireEvent('winClose', win);
    }
});
