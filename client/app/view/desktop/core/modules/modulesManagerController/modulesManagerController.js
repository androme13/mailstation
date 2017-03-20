/* 
 * MailStation by Androme (2017)
 * File :
 * Description :
 * Comment :
 */

Ext.define('Desktop.view.desktop.core.modules.modulesmanagercontroller.modulesManagerController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.modulesmanager',
    constructor: function (config) {
        console.log("modulesmanager controller init");
        this.callParent(arguments);

//Ext.apply(this, config || {});
        //me = this;
        this._modules = [];
        this._modules.push(
                {
                    path: 'Desktop.view.modules.emailsrouting.EmailsRouting',
                    loaded: false
                }
        );
        this._modules.push(
                {
                    path: 'Desktop.view.desktop.core.monitor.Monitor',
                    loaded: false
                }
        );

        //get - set
        Object.defineProperties(this, {
            "modules": {
                "get": function () {
                    return this._modules;
                }
            }
        });
        //this.fireEvent('addShortcut');
        me = this;
    },
    getModules: function () {
        return this._modules;
    },
    scanmodules: function () {

    },
    loadModule: function (module) {
        if (module.path && module.loaded === false) {
            Ext.require(module.path, function () {
                module.module = Ext.create(module.path, {
                });
                module.loaded = true;
            });
        }
    },
    loadAllModules: function ()
    {
        console.log('loadallmodules : ', this)
        var me = this;
        Ext.each(this._modules, function (module) {
            if (module.path && module.loaded === false) {
                Ext.require(module.path, function () {
                    module.module = Ext.create(module.path, {
                    });
                    //notify(module);
                    me.notify(module);
                    module.launcher = module.module.launcher;
                    module.loaded = true;
                    // console.log('module manager :', module.module);
                });
            }
        });
    },
    notify: function (module) {
        console.log('notify');
        //Desktop.app.fireEvent('addShortcut', module);
        this.fireEvent('addShortcut', module);

        // this.fireEvent('addShortcut', module);

    },
    showModule: function (modulePath) {
        console.log('module manager showModule', modulePath);
        // on cherche le module dans la table pour voir si il est chargé
        Ext.each(this._modules, function (module) {
            if (module.path === modulePath) {
                console.log("module trouve");
                if (module.loaded === false) {
                    console.log("module non initialisé");
                    Ext.require(module.path, function () {
                        module.module = Ext.create(module.path, {
                        });
                        module.loaded = true;
                        me.fireEvent('showWindow', module);

                    });
                } else
                {
                    console.log("module deja initialisé");
                    me.fireEvent('showWindow', module);
                }
            }
        });

    },
    unloadModule: function (module) {

    }
});

