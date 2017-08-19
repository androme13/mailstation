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


        var me = this;
        //var memchart=this.createMemChart();
      //  this.view.items.add(memchart);
        console.dir(memchart);

        // var memchart= me.createMemChart();
        // this.view.items.add(memchart);
        Ext.TaskManager.start({
            run: function () {
                ExtRemote.core.DXMonitor.get('Hi!',
                        function (res) {
                            memchart.axes.items[1].maximum = 1600;
                            //console.log("memchart:",memchart);

                            /*var record = me.memStore.getAt(0);
                             record.set("data1", parseInt(res.data.totalMem/1000));
                             console.log("total: ",parseInt(res.data.totalMem/1000));
                             record = me.memStore.getAt(1);
                             record.set("data1", parseInt(res.data.freeMem/1000));
                             console.log( "free: ",parseInt(res.data.freeMem/1000));*/

                        }
                );
            },
            interval: 55000
        });

    },
    createMemChart: function () {
       /* var store1 = Ext.create('Ext.data.JsonStore', {
            fields: ['data'],
            data: [400]
        });*/
        var store = Ext.create('Ext.data.JsonStore', {
    fields: ['value'],
    data: [
        { 'value':80 }
    ]
});

return Ext.create('Ext.chart.Chart', {
    name: "test",
    store: store,
    width: 400,
    height: 250,
    animate: true,
    insetPadding: 30,
    axes: [{
        //type: 'gauge',
        position: 'gauge',
        minimum: 0,
        maximum: 100,
        steps: 10,
        margin: 10
    }],
    series: [{
        type: 'gauge',
        field: 'value',
        donut: 30,
        colorSet: ['#F49D10', '#ddd']
    }]
});
        
        
       /* return Ext.create('Ext.chart.PolarChart', {
            // renderTo: document.body,
            width: 100,
            height: 100,
            series: [{
                    type: 'gauge',
                    minimum: 100,
                    maximum: 800,
                    value: 400,
                    // store: 'store1',
                   // field: 'data',
                    donut: 30,
                    colors: ["#115fa6", "lightgrey"],
                    renderer: function (sprite, record, attr, index, store) {
                        //console.log("renderer");
                       // console.dir(record);
                        // color = "#00f";
                        // return Ext.apply(attr, {fill: color});
                    }
                }]
        });*/
    }
});

