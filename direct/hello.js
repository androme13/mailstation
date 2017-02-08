/* 
 * ZimbrAdmin.
 * by Androme
 * Desc:
 */

var DXHello = {
        wave: function(params, callback){
            console.log ("hello.call");
                callback({
                        success:true,
                        msg:'Hello world ok',
                        params: params,
                        test: 'test'
                });
        }
};
 
module.exports = DXHello;