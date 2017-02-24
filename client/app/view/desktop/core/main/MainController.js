/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Desktop.view.desktop.core.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: [
        //'Desktop.view.desktop.core.windows.WindowsManagerController',
    ],
    init: function () {
        console.log("main controller init");
        ExtRemote.core.hello.wave('Hi!',
                function (res) {
                    console.dir(res);
                }
        );
        this.doRequires();
        windowsManager = Ext.create('Desktop.view.desktop.core.windows.WindowsManagerController', {
        });
        shortcut = Ext.create('Desktop.view.desktop.core.shortcuts.shortcutsController', {
        });
        shortcut.generateShortcuts();
        console.log(shortcut.shortcuts);
        this.view.add(shortcut.shortcuts);

        console.log(this.view);
    },
    show: function () {

        // console.log(windowsManager);

    },
    listen: {
        controller: {
            'startmenu': {
                logoutEvent: 'onLogout',
                'showWindow': 'onShowWindow'
            },
            'windowsmanager': {
                showWindow: 'onShowWindow'
            }
        }
    },
    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('LoggedIn');
        // Remove Main View
        this.getView().destroy();
        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },
    onLogout: function () {
        localStorage.removeItem('LoggedIn');
        this.getView().destroy();
        //this.getView().hide();
        Ext.create({
            xtype: 'login'
        });
    },
    onShowWindow: function () {
        windowsManager.createWindow(this.view);
    },
    doRequires: function () {
        Ext.require('Desktop.view.modules.emailsrouting.EmailsRouting');
    }
});
