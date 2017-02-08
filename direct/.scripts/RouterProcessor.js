/* 
 * ZimbrAdmin.
 * by Androme
 * Desc:
 */

var RouterProcessor  = {

    beforeTransaction: function(req, res, callback) {
        //Implement any logic that should be carried prior to execution
        //Example: open database connection
        //console.log('before');

       // var appDB = global.App.database;

       // appDB.connect();

        callback();
    },

    afterTransaction: function(req, res, batch, callback) {
        //Implement any logic that should be carried after to execution
        //Example: close database connection
        //console.log('after', batch);

       // global.App.database.disconnect(); //release connection

        callback(null, batch);
    }
};

module.exports = RouterProcessor;
