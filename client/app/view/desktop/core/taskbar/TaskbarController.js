/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.taskbar.TaskbarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskbar',
    init: function () {
        console.log("taskbar controller init");
    },
    toggle: function () {
        if (StartMenu.showed === false)
        {
            StartMenu.show();
            StartMenu.focus();
            StartMenu.showed = true;
        } else if (StartMenu.showed === true)
        {
            StartMenu.hide();
            StartMenu.showed = false;
        }
        this.view.fireEvent('refreshStartMenu');
    },
    refreshStartMenufunc: function () {
        if (StartMenu.showed === true) {
            var box = this.view.getBox();
            StartMenu.setPosition(0, box.y - StartMenu.getBox().height);
        }
    },
    listen: {
        controller: {
            'window': {
                gotFocus: 'closeMenu',
            }
        }
    },
    closeMenu: function (win) {
        if (StartMenu.showed === true)
            this.toggle();
    }
});
