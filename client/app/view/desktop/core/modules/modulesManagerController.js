/* 
 * MailStation by Androme (2017)
 * File :
 * Description :
 * Comment :
 */

Ext.define('Desktop.view.desktop.core.modules.modulesManagerController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.modulesmanager',
    init: function () {
        console.log("modulesmanager controller init");
        modules = [];
        modules.push(
                {
                    path: 'Desktop.view.modules.emailsrouting.EmailsRouting'
                }
        );
        me = this;
        Ext.require(['Desktop.view.modules.emailsrouting.EmailsRouting'], function () {
            me.createModules();
        });      
    },
    listen: {
        controller: {
            /* 'window': {
             //winMinimize: 'hideWindow',
             winClose: 'winClose'
             }*/
        }
    },
    createModules: function()
    {
         Ext.each(modules, function (module) {
            if (module.path) {
                module.object = Ext.create(module.path, {
                });
                // return false; /*this will prevent each from looking at 
                // the next obj in the arrayObj * /
            }
        });
        console.log (modules);
    }
});

