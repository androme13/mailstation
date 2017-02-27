/* 
 * MailStation by Androme (2017)
 * File :
 * Description :
 * Comment :
 */

/* 
 * monitor.js
 * (C) Androme 2015
 * 
 */
var log = global.log;
//global.Monitor.ZM = {};
var exec = require('child_process').exec;

var fs = require('fs');
var os = require('os');
var cpu = os.cpus();
var Monitor = new Object();
var memTotal = 0;
var memFree = 0;
var memBuffers = 0;
var memCached = 0;
//var counter = 0;
var total = 0;
var sys = 0;
var user = 0;
var nice = 0;
var irq = 0;
var idle = 0;
function start(MonitorConfig) {
    var me = this;
    var stat1, stat2, info1, info2;
    //on definit le monitor zm
    global.Monitor = {};
    //global.Monitor.CPU={}
    Monitor.tasks.ZM = setInterval(function () {
        //clearInterval(this);
        // on s'occupe de la mémoire
        /*stat1 = fs.readFileSync('/proc/meminfo', "utf8");
        var memDataRaw = stat1.split('\n');       
        var memData ={};
        var tempData = [];
        for (var i=0;i<memDataRaw.length-1;i++){
            tempData=memDataRaw[i].split(':');
            tempData[1]= parseInt(tempData[1]);
            memData[tempData[0]]=tempData[1];
        }*/
        //global.Monitor.ZM.MEM=memData;
        global.Monitor.uptime=os.uptime();
        global.Monitor.totalMem=os.totalmem();
        global.Monitor.freeMem=os.freemem();
        global.Monitor.loadAVG=os.loadavg();
        global.Monitor.CPUS=os.cpus();
        global.log.info('monitor:',global.Monitor);
        // on relis les ressources cpu pour faire un dif et avoir la vraie valeur
       /*setTimeout(function () {
            global.log.info('monitor:',global.Monitor)
        },
                1000);*/
    }, 2000)//serverConfig.Monitor.timerZM);

// on definit le monitor postfix
    Monitor.tasks.SMTP = setInterval(function () {
    }, 2000);
}
;
function topToString(entry, start, stop) {
    entry.replace(' ', '');
    return entry.substring(start, stop).replace(',', '.')
}
;

exports.init = function (MonitorConfig) {
    Monitor.tasks = new Object();
    Monitor.ZM = new Object();
    start(MonitorConfig);
};


exports.stop = function () {
    clearInterval(Monitor.tasks.ZM);
    clearInterval(Monitor.tasks.SMTP);
};
