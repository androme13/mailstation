/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.windows.Window', {
    requires: [
        'Desktop.view.desktop.core.windows.WindowController',
        'Desktop.view.modules.emailsrouting.EmailsRouting'
    ],
    extend: 'Ext.window.Window',
    xtype: 'app-window',
    controller: 'window',
    autoScroll: true,
    title: 'Hello',
    maximizable: true,
    minimizable: true,
    constrain: true,
    //constrainHeader: true,
    height: 200,
    width: 400,
    //layout: 'fit',
    items: [{
        }],
    listeners: {
        minimize: 'minimizeWin',
        close: 'closeWin',
        focus: 'getFocus'
    }
});
