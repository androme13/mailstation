/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.shortcuts.shortcutsController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.shortcuts',
    init: function (modules) {
        console.log("shortcuts generate init", modules);
        var idCSS = '' + Math.floor(Math.random() * 100);
        Ext.util.CSS.createStyleSheet('', idCSS);
        Ext.util.CSS.swapStyleSheet(idCSS, 'app/view/desktop/core/shortcuts/style.css');
        me = this;
        this.shortcuts = []
        Ext.each(modules, function (module) {
            me.shortcuts.push({
                xtype: 'button',
                style: ' background: transparent !important;',
                border: 0,
                draggable: true,
                iconCls: 'shortcutIcon80',
                iconAlign: 'top',
                width: 120,
                height: 100,
                tooltip: module.path,
                html: '<span class="shortcutText">'+module.path+'</span>',
                path: module.path,
                handler: function (item) {
                    me.shortcutClick(item);
                }
            });
        });

    },
    addShortcut: function () {

    },
    removeShortcut: function () {

    },
    getShortcuts: function () {

    },
    shortcutClick: function (item) {
        console.log('shortcut button click', item);
        this.fireEvent('showModule', item.path);

    }

});
