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
    shortcutsMngr: Ext.create('Desktop.view.desktop.core.shortcuts.shortcutsController', {}),
    modulesMngr: Ext.create('Desktop.view.desktop.core.modules.modulesmanagercontroller.modulesManagerController', {}),
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

        //modules.
        this.modulesMngr.loadAllModules();
        //var modu = modulesMngr.modules;
        //console.log('modules :',modu);

        //console.log(modules);
        windowsMngr = Ext.create('Desktop.view.desktop.core.windows.WindowsManagerController', {
        });
        //var shortcutsMngr = Ext.create('Desktop.view.desktop.core.shortcuts.shortcutsController', {
        // });
        //shortcutsMngr.init(modulesMngr.modules);
        //console.log(shortcut.shortcuts);
        //this.view.add(shortcutsMngr.shortcuts);
    },
    show: function () {

        // console.log(windowsMngr);

    },
    listen: {
        controller: {
            'startmenu': {
                logoutEvent: 'onLogout',
                'showWindow': 'onShowModule',
            },
            'windowsmanager': {
                showWindow: 'onShowWindow'
            },
            'modulesmanager': {
                'addShortcut': 'onAddShortcut',
                'showWindow': 'onShowWindow'
            },
            'shortcuts': {
                'showModule': 'onShowModule'
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
        var shortcut = this.shortcutsMngr.addShortcut(module);
        this.view.add(shortcut);

    },
    onShowModule: function (modulePath) {
        this.modulesMngr.showModule(modulePath);
    },
    onShowWindow: function (module) {
        windowsMngr.createWindow(module,this.view);
    },
    /*onShowWindow2: function (module) {
        windowsMngr.createWindow(module,this.view);
    },*/
    /*onShowModule:function(module){
     console.log("show module");
     },*/

    doRequires: function () {
        //Ext.require('Desktop.view.desktop.core.monitor.Monitor');
        //Ext.require('Desktop.view.modules.emailsrouting.EmailsRouting');
    },
    createShortcuts: function () {

    }
});
