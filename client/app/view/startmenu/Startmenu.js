/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.startmenu.Startmenu', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main-taskbar-startmenu',
    requires: [
        'Desktop.view.startmenu.StartmenuController',
    ],
    controller: 'startmenu',
    margins: '0,0,0,0',
    height: 200,
    width: 100,
    style: {
        '-webkit-user-select': 'none',
    },
    showed: false,
    header: {
        title: "test",
        // margins: '0,0,0,0',
        // height : 20
    },
    items: [{
            xtype: 'label',
            text: 'test'
                    // width : 150
                    //  xtype: 'button',
                    //   text: 'start',
                    //handler: 'toggle'
        },
        {
            xtype: 'button',
            text: 'Logout',
            margin: '10 0',
            handler: 'onLogout'
        }]
});
