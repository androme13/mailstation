/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.taskbar.WindowsList', {
    extend: 'Ext.panel.Panel',
    xtype: 'windowslist',
    requires: [
      'Desktop.view.desktop.core.taskbar.WindowsListController'  
    ],
    alias: 'widget.windowslist',
    controller: 'windowslist',
    //items: [{
   //}]

});
