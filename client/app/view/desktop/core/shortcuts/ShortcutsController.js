/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.shortcuts.shortcutsController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.shortcuts',
    init: function () {
        console.log("shortcuts controller init");
        //this.generateShortcuts();
        // configuration de la fenêtre par rapport au module
        //shortcuts =[];

    },
    addShortcut: function () {

    },
    removeShortcut: function () {

    },
    getShortcuts: function () {

    },
    generateShortcuts: function () {
        console.log("shortcuts generate init");
        var idCSS = '' + Math.floor(Math.random() * 100);
        Ext.util.CSS.createStyleSheet('', idCSS);
        Ext.util.CSS.swapStyleSheet(idCSS, 'app/view/desktop/core/shortcuts/style.css');
        this.shortcuts = {
            xtype: 'button',
            style: ' background: transparent !important;',
            border: 0,
            draggable: true,
            iconCls: 'shortcutIcon80',
            iconAlign: 'top',
            width: 120,
            height: 100,
            html: '<span class="shortcutText">Routage des mails</span>',
            handler: function () {
                // this.cancelFocus();
                console.log('shortcut button click');
            }
        }
    }

});
