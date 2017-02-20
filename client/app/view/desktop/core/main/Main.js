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
        'Desktop.view.desktop.core.main.MainController',
        'Desktop.view.desktop.core.taskbar.Taskbar'
    ],
    controller: 'main',
    //viewModel: 'main',
    plugins: 'viewport',
    ui: 'navigation',
    bodyStyle: {"background-color": "grey"},
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
