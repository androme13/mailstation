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
        this.createMemChart();
        var me = this;
        Ext.TaskManager.start({
            run: function () {
                ExtRemote.core.DXMonitor.get('Hi!',
                        function (res) {
                            var record = me.memStore.getAt(0);
                            record.set("data1", res.data.totalMem);
                            record = me.memStore.getAt(1);
                            record.set("data1", res.data.freeMem);
                            //console.dir(record);
                        }
                );
            },
            interval: 5000
        });
        console.log(this.memStore);
    },
    createMemChart: function () {
        var memChart = Ext.create({
            xtype: 'polar',
        reference: 'chart',
        width: 100,
        height: 100,
        //insetPadding: 50,
       // innerPadding: 20,
        store: this.memStore,
       /* legend: {
            docked: 'bottom'
        },*/
        interactions: ['rotate', 'itemhighlight'],
      /*  sprites: [{
            type: 'text',
            text: 'Donut Charts - Basic',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }, {
            type: 'text',
            text: 'Data: IDC Predictions - 2017',
            x: 12,
            y: 425
        }, {
            type: 'text',
            text: 'Source: Internet',
            x: 12,
            y: 440
        }],*/
        series: [{
            type: 'pie',
            angleField: 'data1',
            donut: 50,
            label: {
                field: 'name',
                display: 'outside'
            },
            highlight: true,
            /*tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }*/
        }]
        });
        this.view.items.add(memChart);
    }
});

