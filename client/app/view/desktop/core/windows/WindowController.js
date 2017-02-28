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
        // configuration de la fenêtre par rapport au module
        mod = Ext.create(this.view.module);
        //var path = Ext.Loader.getPath('Desktop.view.modules.emailsrouting').slice(0, -3);
        this.view.title = mod.launcher.windowTitle;
        this.view.down().add(mod);
        //this.view.icon = path + mod.launcher.windowIcon;
    },
    minimizeWin: function (win) {
        this.view.hide();
        this.fireEvent('windowMinimize', win);

    },
    closeWin: function (win) {
        this.fireEvent('winClose', win);
    },
    getFocus: function (win) {
        this.fireEvent('gotFocus', win);
    },
    looseFocus: function (win) {
        this.fireEvent('looseFocus', win);
    }
});
