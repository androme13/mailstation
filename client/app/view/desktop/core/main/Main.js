/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Desktop.view.desktop.core.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Desktop.view.desktop.core.windows.WindowsManagerController',
        'Desktop.view.desktop.core.main.MainController',
        'Desktop.view.desktop.core.taskbar.Taskbar',
        'Desktop.view.desktop.core.shortcuts.shortcutsController'

    ],
    controller: 'main',
    //viewModel: 'main',
    //margin: '5 5 5 5',
    plugins: 'viewport',
    ui: 'navigation',
    bodyStyle: "background-image:url(app/view/desktop/core/wallpapers/black-and-white-city-skyline-buildings.jpg) !important",
    //items:[this.shortcut.shortcuts],
    //bodyStyle: {"background-color": "grey"},
    /*items: [
     {
     xtype: 'button',
     style: ' background: transparent !important;\n\
     background-image: url(app/view/modules/emailsrouting/rsc/img/shortcut.png) !important;width:80px!important;height:80px!important;margin-right: auto !important; margin-left: auto !important;',
     bodyStyle: 'outline: 0px',
     border: 0,
     width: 64,
     height: 64,
     // icon: 'app/view/modules/emailsrouting/rsc/img/shortcut.png',
     //cls:' background-image: url(app/view/modules/emailsrouting/rsc/img/shortcut.png) !important;',
     iconAlign: 'top',
     //scale: 'large',
     //text: "test",
     html: '<span class="bigBtn">Damn you hayate</span>',
     handler: function () {
     this.cancelFocus();
     console.log('shortcut button click');
     }
     
     },
     {
     xtype: 'panel',
     //draggable: true,
     layout: {
     type: 'vbox',
     align: 'center',
     pack: 'center'
     },
     //bodyStyle: 'opacity:0.5;',
     bodyStyle: 'background:transparent;',
     maxHeight: 65,
     maxWidth: 65,
     items: [
     {
     xtype: 'image',
     src: 'app/view/modules/emailsrouting/rsc/img/shortcut.png',
     alt: "Smiley face"
     },
     {
     xtype: 'label',
     text: 'test'
     }
     ],
     listeners: {
     click: function () {
     console.log('shortcut click');
     },
     dblclick: function () {
     console.log('shortcut double click');
     },
     element: 'body'
     }
     }],*/
    dockedItems: [{
            dock: 'bottom',
            items: [{
                    xtype: 'app-main-taskbar'
                }]
        }],
    listeners: {
        resize: function () {
            this.down('#app-main-taskbar').fireEvent('refreshStartMenu');
        }
    }

});
