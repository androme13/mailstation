/* 
 * MailStation by Androme (2017)
 * File :
 * Description :
 * Comment :
 */

var DXCommon = require('../../tools/DXCommon.js');
var DXMonitor = {
    // method signature has 5 parameters
    /**
     *
     * @param params object with received parameters
     * @param callback callback function to call at the end of current method
     * @param sessionID - current session ID if "enableSessions" set to true, otherwise null
     * @param request only if "appendRequestResponseObjects" enabled
     * @param response only if "appendRequestResponseObjects" enabled
     */

    get: function (params, callback, sessionID, request, response) {
        // on set les parametres par défaut si ils sont absents
        if (!params)
            var params = {};
        DXCommon.sendMsg(true, null, global.Monitor,callback,1,null);
    }
};

module.exports = DXMonitor;
