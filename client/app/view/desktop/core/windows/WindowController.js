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
        module = Ext.create('Desktop.view.modules.emailsrouting.EmailsRouting');
        this.view.down().add(module);
    },
    minimizeWin: function (win) {
        this.view.hide();
    },
    closeWin: function (win) {
        this.fireEvent('winClose', win);
    },
    getFocus: function(win) {
        this.fireEvent('gotFocus', win);
    }
});
