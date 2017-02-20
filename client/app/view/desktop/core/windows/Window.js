/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.windows.Window', {
    requires: [
        'Desktop.view.desktop.core.windows.WindowController'
    ],
    extend: 'Ext.window.Window',
    xtype: 'app-main-window',
    //itemId: 'app-main-windows',
    //margins: '0,0,0,0',
    //padding: '0,0,10,10',
    controller: 'window',
    title: 'Hello',
    height: 200,
    width: 400,
    layout: 'fit',
    items: [{
 
        }]
  /*  listeners: {


    }*/
});
