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
    scanmodules: function(){
        
    },
    loadModule: function (module) {
        if (module.path && module.loaded === false) {
            Ext.require(module.path, function () {
                module.module = Ext.create(module.path, {
                });
                module.loaded = true;
            });
        }
        //console.log(this._modules);
    },
    loadAllModules: function ()
    {
       console.log('loadallmodules : ',this)
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
    notify: function(module){
        console.log('notify');
       //Desktop.app.fireEvent('addShortcut', module);
       this.fireEvent('addShortcut', module);
       
                           // this.fireEvent('addShortcut', module);

    },
    unloadModule: function (module) {

    }
});

