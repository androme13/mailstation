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
        'Desktop.view.desktop.core.windows.WindowsManagerController',
        'Desktop.view.desktop.core.modules.modulesmanagercontroller.modulesManagerController',
        'Desktop.view.desktop.core.shortcuts.shortcutsController'

    ],
    init: function () {
        console.log("main controller init");
        /* ExtRemote.core.hello.wave('Hi!',
         function (res) {
         console.dir(res);
         }
         );
         ExtRemote.core.DXMonitor.get('Hi!',
         function (res) {
         console.dir(res);
         }
         );*/
        modulesMngr = Ext.create('Desktop.view.desktop.core.modules.modulesmanagercontroller.modulesManagerController', {
        });
        //modules.
        modulesMngr.loadAllModules();
        //var modu = modulesMngr.modules;
        //console.log('modules :',modu);

        //console.log(modules);
        windowsMngr = Ext.create('Desktop.view.desktop.core.windows.WindowsManagerController', {
        });
        shortcutsMngr = Ext.create('Desktop.view.desktop.core.shortcuts.shortcutsController', {
        });
        //shortcutsMngr.init(modulesMngr.modules);
        //console.log(shortcut.shortcuts);
        this.view.add(shortcutsMngr.shortcuts);
    },
    show: function () {

        // console.log(windowsMngr);

    },
    listen: {
        controller: {
            'startmenu': {
                logoutEvent: 'onLogout',
                'showWindow': 'onShowWindow',
                'showWindow2': 'onShowWindow2'
            },
            'windowsmanager': {
                showWindow: 'onShowWindow'
            },
            'modulesmanager': {
                //'addShortcut': 'onAddShortcut'
            },
            'shortcuts': {
                'addShortcut': 'onAddShortcut'
            }
        }
    }, onLogout: function () {
        localStorage.removeItem('LoggedIn');
        this.getView().destroy();
        //this.getView().hide();
        Ext.create({
            xtype: 'login'
        });
    },
    onAddShortcut: function (module) {
        console.log('onAddShortcut', module);

    },
    onShowModule: function (modulePath) {
        console.log('onshowmodule', modulePath);
    },
    onShowWindow: function () {
        windowsMngr.createWindow(this.view);
    },
    onShowWindow2: function () {
        windowsMngr.createWindow2(this.view);
    },
    doRequires: function () {
        //Ext.require('Desktop.view.desktop.core.monitor.Monitor');
        //Ext.require('Desktop.view.modules.emailsrouting.EmailsRouting');
    },
    createShortcuts: function () {

    }
});
