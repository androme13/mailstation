/* 
 * MailStation by Androme (2017)
 * File :
 * Description :
 * Comment :
 */

Ext.define('Desktop.view.desktop.core.modules.monitor.Monitor', {
    extend: 'Ext.panel.Panel',
    launcher: {
        menu: 'monitor|serveur',
        menuTitle: 'moniteur serveur',
        windowTitle: 'Moniteur système',
        windowIcon: '/rsc/img/icon.png'
    },
    xtype: 'monitor',
    requires: [
        'Desktop.view.desktop.core.modules.monitor.MonitorController'
    ],
    alias: 'widget.monitor',
    controller: 'monitor',
    
    
});


