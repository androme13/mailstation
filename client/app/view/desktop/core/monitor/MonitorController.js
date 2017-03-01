/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('Desktop.view.desktop.core.monitor.MonitorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.monitor',
    init: function () {
        console.log("monitor controller init");


        this.memStore = Ext.create('Ext.data.Store', {
            fields: ['name', 'data1'],
            data: [{
                    name: 'Total mem',
                    data1: 50
                }, {
                    name: 'Free mem',
                    data1: 100
                }]
        });
        
        var me = this;
        Ext.TaskManager.start({
            run: function () {
                ExtRemote.core.DXMonitor.get('Hi!',
                        function (res) {
                            var record = me.memStore.getAt(0);
                            record.set("data1", res.data.totalMem/1000);
                            record = me.memStore.getAt(1);
                            record.set("data1", res.data.freeMem/1000);
                            //console.dir(record);
                        }
                );
            },
            interval: 5000
        });
        this.createMemChart();
       // console.log(this.memStore);
    },
    createMemChart: function () {
        
        var memChart = Ext.create({
        xtype: 'polar',
        colors: ['red','green'],
        width: '100%',
        height: 100,
        store: this.memStore,
        //insetPadding: 50,
        
        legend: {
            docked: 'bottom',
        },
        interactions: ['rotate', 'itemhighlight'],
        series: [{
            type: 'pie',
            angleField: 'data1',
            /*label: {
                field: 'name',
                calloutLine: {
                    length: 60,
                    width: 3
                    // specifying 'color' is also possible here
                }
            },*/
            highlight: true,
        }]
        });
        //console.log(this.view);
       /* var panel = Ext.create('widget.panel', {
            title: 'All Open Requests by Focus Area and Target Completion Date',
            cls: 'printer',
            //height: 900,
            width: '95%',
            resizable: true,
            resizeHandles: 's',
            bodyPadding: '5 0 20 10',
            autoScroll: false,
            layout: 'fit',
            //renderTo: 'contents',
            //items: memChart,
        });*/
        this.view.items.add(memChart);
        
    }
});

