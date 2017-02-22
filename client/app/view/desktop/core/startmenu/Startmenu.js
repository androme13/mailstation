/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.startmenu.Startmenu', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main-taskbar-startmenu',
    requires: [
        'Desktop.view.desktop.core.startmenu.StartmenuController'
    ],
    controller: 'startmenu',
    margins: '0,0,0,0',
    minHeight: 100,
    minWidth: 100,
    mouseIn: false,
    style: {
        '-webkit-user-select': 'none'
    },
    showed: false,
    header: {
        title: "test"
        // margins: '0,0,0,0',
        // height : 20
    },
    items: [{
            layout: 'hbox',
            align: 'stretch',
            //layoutConfig: { align: "stretch" },
            items: [{
                    xtype: 'panel',
                    //margin: '0 10 0 5',
                    padding: 5,
                    layout: 'vbox',
                    flex: 1,
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
                            text: 'Routage',
                            handler: 'showWindow'
                                    // width : 150
                                    //  xtype: 'button',
                                    //   text: 'start',
                                    //handler: 'toggle'
                        }
                    ]},
                {
                    xtype: 'panel',
                    padding: 5,
                    layout: 'vbox',
                    flex: 1,
                    bodyStyle: {
                        'background': 'grey'
                    },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Mon profil'
                            // margin: '10 0',
                            //handler: 'onLogout'
                        },
                        {
                            xtype: 'button',
                            text: 'Se deconnecter',
                            // margin: '10 0',
                            handler: 'onLogout'
                        }
                    ]
                }]
        }],
    listeners: {
       /* focusover: function () {
            console.log("mousein");

            mouseIn = true;
        },
        focusleave: function () {
            console.log("mouseout");

            mouseIn = false;
        }*/
    }
});
