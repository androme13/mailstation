/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.taskbar.Trayclock', {
    extend: 'Ext.toolbar.TextItem',
    xtype: 'deskclock',
    alias: 'widget.trayclock',
    style:{
        '-webkit-user-select':'none'
    },
    html: '&#160;',
    timeFormat: 'G:i',
    tpl: '{time}',
    initComponent: function () {
        var me = this;

        me.callParent();

        if (typeof (me.tpl) == 'string') {
            me.tpl = new Ext.XTemplate(me.tpl);
        }
    },
    afterRender: function () {
        var me = this;
        Ext.Function.defer(me.updateTime, 100, me);
        me.callParent();
    },
    onDestroy: function () {
        var me = this;

        if (me.timer) {
            window.clearTimeout(me.timer);
            me.timer = null;
        }

        me.callParent();
    },
    updateTime: function () {
        var me = this, time = Ext.Date.format(new Date(), me.timeFormat),
                text = me.tpl.apply({time: time});
        if (me.lastText != text) {
            me.setText(text);
            me.lastText = text;
        }
        me.timer = Ext.Function.defer(me.updateTime, 10000, me);
    }
});
