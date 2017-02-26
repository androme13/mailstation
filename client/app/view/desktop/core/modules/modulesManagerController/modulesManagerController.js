/* 
 * MailStation by Androme (2017)
 * File :
 * Description :
 * Comment :
 */

Ext.define('Desktop.view.desktop.core.modules.modulesmanagercontroller.modulesManagerController', {
    alias: 'controller.modulesmanager',
    constructor: function () {
        console.log("modulesmanager controller init");
        this._modules = [];
        this._modules.push(
                {
                    path: 'Desktop.view.modules.emailsrouting.EmailsRouting',
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

        //me = this;
        /*Ext.require(['Desktop.view.modules.emailsrouting.EmailsRouting'], function () {
         me.createModules();
         });  /    
         },
         listen: {
         controller: {
         /* 'window': {
         //winMinimize: 'hideWindow',
         winClose: 'winClose'
         }*/
    },
    getModules: function(){
      return this._modules;  
    },
    
    loadModule: function (module) {
        if (module.path && module.loaded === false) {
            Ext.require(['Desktop.view.modules.emailsrouting.EmailsRouting'], function () {
                module.object = Ext.create(module.path, {
                });
                module.loaded = true;
            });
        }
        console.log(this._modules);
    },
    loadAllModules: function ()
    {

        Ext.each(this._modules, function (module) {
            if (module.path && module.loaded === false) {
                Ext.require(['Desktop.view.modules.emailsrouting.EmailsRouting'], function () {
                    module.object = Ext.create(module.path, {
                    });
                    module.loaded = true;
                });
            }
        });
        console.log(this._modules);
    },
});

