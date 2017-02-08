/* 
 * DXLogin
 * (C) Androme 2015
 * 
 */
//var log = global.log.child({widget_type: 'DXLogin'});
var pool = global.pool;
//console.log(window.location.href);
var DXCommon = require("../../tools/DXCommon.js");

var DXLogin = {
    // method signature has 5 parameters
    /**
     *
     * @param params object with received parameters
     * @param callback callback function to call at the end of current method
     * @param sessionID - current session ID if "enableSessions" set to true, otherwise null
     * @param request only if "appendRequestResponseObjects" enabled
     * @param response only if "appendRequestResponseObjects" enabled
     */
    authenticate: function (params, callback, sessionID, request, response) {
        pool.getConnection(function (err, connection) {
            if (err) {
                err.ZMTypeCode = 'LOGIN';
                err.ZMErrorCode = 101;
                DXCommon.sendError(err, callback);
            }
            else
            {
                setLanguage(connection, request);
                connection.escape(params.username);
                connection.escape(params.password);
                var query = "SELECT id,level,state,username,firstname,lastname from users WHERE username='";
                query += params.username + "'";
                query += " AND password='" + params.password + "'";
                //query += " AND state= 2";
                connection.query(query, function (err, rows, fields) {
                    var message = {};
                    if (!err) {
                        if (rows.length !== 0) {
                            request.session.userinfo = rows[0];
                            var message = {};
                            switch (rows[0].state) {
                                case 0:
                                  //  log.info('Login try of disabled account ' + request.session.userinfo.username);
                                    message.ZMTypeCode = 'LOGIN';
                                    message.ZMErrorCode = 105;
                                    break;
                                case 2:
                                  //  log.info('Login try of locked account ' + request.session.userinfo.username);
                                    message.ZMTypeCode = 'LOGIN';
                                    message.ZMErrorCode = 106;
                                    break;
                                case 1:
                                   // log.info('Login of ' + request.session.userinfo.username);
                                    message.ZMTypeCode = 'LOGIN';
                                    message.ZMErrorCode = 100;
                                    break;
                            }
                            DXCommon.sendMsg(true, message, null, callback);
                        }
                        else
                        {
                            message = {
                                'ZMTypeCode': 'LOGIN',
                                'ZMErrorCode': 103
                            };
                            DXCommon.sendMsg(true, message, null, callback);
                        }
                    }
                    else
                    {
                        err.ZMTypeCode = 'LOGIN';
                        err.ZMErrorCode = 102;
                        err.ZMErrorMsg = String(err);
                        DXCommon.sendError(err, callback);
                    }
                });
            }
            if (connection)
                connection.release();
        }
        );
    },
    getsession: function (params, callback, sessionID, request, response) {
        response.header('My-Custom-Header ', '1234567890');
        var data = {};
        var message = {};
        if (request.session.userinfo) {
            // on ne fournit que les info utilisateur et pas les autres
            // comme les infos coockies
            data.userinfo = request.session.userinfo;
            message = {
                'ZMTypeCode': 'LOGIN',
                'ZMErrorCode': 300
            }
            DXCommon.sendMsg(true, message, data, callback);
        }
        else
        {
            message = {
                ZMTypeCode: 'LOGIN',
                ZMErrorCode: 303,
                ZMErrorMsg: null
            }
            DXCommon.sendMsg(false, message, null, callback);
        }
    },
    isvalidsession: function (params, callback, sessionID, request, response) {
        response.header('My-Custom-Header ', '1234567890');
        var success = false;
        if (request.session.userinfo) {
            success = true;
            var message = {
                'ZMTypeCode': 'LOGIN',
                'ZMErrorCode': 300
            }
            DXCommon.sendMsg(true, message, null, callback);
        }
        else
        {
            message = {
                ZMTypeCode: 'LOGIN',
                ZMErrorCode: 303,
                ZMErrorMsg: null
            }
            DXCommon.sendMsg(false, message, null, callback);
        }
    },
    logout: function (params, callback, sessionID, request, response) {
        response.header('My-Custom-Header ', '1234567890');
        if (request.session.userinfo)
            delete request.session.userinfo;
        var message = {
            'ZMTypeCode': 'LOGIN',
            'ZMErrorCode': 200
        }
        DXCommon.sendMsg(true, message, null, callback);
    }
};
function setLanguage(connection, request)
{
    var lang = "fr_FR";
    if (request.session.userinfo) {
        if (request.session.userinfo.lang) {
            lang = request.session.userinfo.lang;
        }
    }
    var query = "SET lc_messages = '" + lang + "'";
    connection.query(query, function (err, rows, fields) {
    });
}
module.exports = DXLogin;