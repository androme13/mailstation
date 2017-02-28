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
                    name: 'metric one',
                    data1: 50
                }, {
                    name: 'metric two',
                    data1: 100
                }]
        });
        this.createMemChart();
        var me = this;
        Ext.TaskManager.start({
            run: function () {
                ExtRemote.core.DXMonitor.get('Hi!',
                        function (res) {
                            //var record = this.view.memStore.getAt(0);
                            //record.set("name", "id");
                            console.dir(me);
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
            //renderTo: document.body,
            width: 200,
            height: 200,
            theme: 'green',
            interactions: ['rotate', 'itemhighlight'],
            store: this.memStore,
            series: {
                type: 'pie',
                highlight: true,
                angleField: 'data1',
                label: {
                    field: 'name',
                    display: 'rotate'
                },
                donut: 30
            }
        });
        this.view.items.add(memChart);
    }
});

