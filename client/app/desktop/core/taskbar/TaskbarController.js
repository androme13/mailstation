/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.desktop.core.taskbar.TaskbarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskbar',
    init: function () {
        console.log("taskbar controller init");
    },
    toggle: function () {
        if (StartMenu.showed === false)
        {
            this.pressed = true;
            StartMenu.show();
            StartMenu.showed = true;
        } else
        {
            this.pressed = false;
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
    }
});
