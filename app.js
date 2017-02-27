// mailstation server side


/*if(!global['App']) {
 global.App = {};
 }*/
var express = require('express');
var app = express();
var async = require('async');
var bodyParser = require('body-parser');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var direct = require('extdirect');
var monitor = require('./modules/core/monitor.js');
var directConfig = require('./direct-config');
var directApi = direct.initApi(directConfig);
var directRouter = direct.initRouter(directConfig);
var fs = require('fs');
var https = require('https');
var http = require('http');
var mysql = require('mysql');
var path = require("path");
prod = false;
var serverConfig = require('./server-config');
var session = require('express-session');
var winston = require('winston')
/*var logger = new (winston.Logger)({
 transports: [
 new (winston.transports.Console)(),
 //new (winston.transports.File)({ filename: 'somefile.log' })
 ]
 });*/
global.log = require("winston-color");
//global.Monitor={};
monitor.init();
//monitor.stop();
global.log.info("MailStation V0.0.1");
global.log.info("MailStation Init ...");

global.pool = mysql.createPool({
    connectionLimit: 100,
    host: serverConfig.MySQLConfig.host,
    user: serverConfig.MySQLConfig.user,
    password: serverConfig.MySQLConfig.password,
    database: serverConfig.MySQLConfig.database,
    debug: false,
    multipleStatements: true
});


function getDirectories (srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
};


var sslOpts = {
    key: fs.readFileSync('ssl/certif.key'),
    cert: fs.readFileSync('ssl/certif-crt.pem')
};

var startPage = function (req, res) {
    prod = false;
    logger.info("Mode Dev");
    res.sendFile('/client/index.html', {root: __dirname});
};

var startPageBuild = function (req, res) {
    prod = true;
    logger.info("Mode Build");
    res.sendFile('/client/build/production/Desktop/index.html', {root: __dirname});
};

var cache_appcache = function (req, res) {
   // if (prod === true)
   logger.info("Chargement cache.appcache");
        res.sendFile('/client/build/production/Desktop/cache.appcache', {root: __dirname});
    //else
   //     res.sendFile('/client/cache.appcache', {root: __dirname});
};


/*// on active la compression
 app.use(compression());
 
 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: true }));
 
 // parse application/json
 app.use(bodyParser.json());
 
 app.use(express.static(__dirname + '/client'));
 
 
 app.get('/',function(req,res){
 res.sendFile(path.join(__dirname+'/client/index.html'));
 //__dirname : It will resolve to your project folder.
 });*/

app.use(parallel([
    express.static(__dirname + '/client'),
    bodyParser.urlencoded({extended: true}),
    //compression(),
    bodyParser.json(),
    //cookieParser(),
    session({
        secret: serverConfig.ServerConfig.sessionSecret,
        resave: false,
        saveUninitialized: false,
        cookie: {maxAge: serverConfig.ServerConfig.sessionMaxAge, secret: serverConfig.ServerConfig.sessionSecret},
        rolling: true
    })
]));
// on charge la page par defaut
app.get('/', startPage);

// on charge la page par defaut de la build
//app.get('/prod', startPageBuild);

// on charge la page par defaut de la build
//app.get('/cache.appcache', cache_appcache);

//Routes
//GET method returns API
app.get(directConfig.apiUrl, function (req, res) {
    try {
        directApi.getAPI(
                function (api) {
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(api);
                }, req, res
                );
    } catch (e) {
        console.log(e);
    }
});

// on ignore les GET requests sur le class path de extdirect
app.get(directConfig.classRouteUrl, function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({success: false, msg: 'Unsupported method. Use POST instead.'}));
});

// POST request process route and calls class
app.post(directConfig.classRouteUrl, function (req, res) {
    console.log("direct call");
    //console.log(req);
    // console.log(res);
    //res.writeHead(401, {'Content-Type': 'application/json'});
    //    res.end(JSON.stringify({success: false, msg: 'Please Login before'}));
    directRouter.processRoute(req, res);
});

function parallel(middlewares) {
    return function (req, res, next) {
        async.each(middlewares, function (mw, cb) {
            mw(req, res, cb);
        }, next);
    };
}
;

//création serveur http et redirection vers https
/*HTTPServer = http.createServer(function (req, res) {
    res.writeHead(301, {
        Location: "https://" + serverConfig.ServerConfig.host.toString() + ":" + serverConfig.ServerConfig.HTTPSPort.toString()
    });
    res.end();
}).listen(serverConfig.ServerConfig.HTTPPort);*/

// creation serveur https
HTTPSServer = https.createServer(sslOpts, app).listen(serverConfig.ServerConfig.HTTPSPort);
//app.listen(80);

process.on('SIGINT', function () {
    logger.info("Stopping MailStation...");
    HTTPServer.close();
    HTTPSServer.close();
    process.exit();
});
global.log.info('MailStation server listening on port %d in %s mode', serverConfig.ServerConfig.HTTPSPort, app.settings.env);
global.log.info("MailStation Running...");