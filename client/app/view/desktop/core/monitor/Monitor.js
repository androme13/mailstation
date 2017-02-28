/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.monitor.Monitor', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main-monitor',
    requires: [
        'Desktop.view.desktop.core.monitor.MonitorController'
    ],
    launcher: {
        menu: 'systeme|Monitor',
        menuTitle: 'Monitor',
        windowTitle: 'Monitoring du système',
        windowIcon: '/rsc/img/icon.png'
    },
    controller: 'monitor',
    //margins: '0,0,0,0',
    minHeight: 100,
    minWidth: 100,
   // height: 400,
   // width:600,
    //layout: 'fit',
    mouseIn: false,
    style: {
        '-webkit-user-select': 'none'
    },
    showed: false,
    header: {
        title: "Monitor"
                // margins: '0,0,0,0',
                // height : 20
    },
    items: []

});
