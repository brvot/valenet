module.exports = async function (context, req) {
    
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "db-sokits.mysql.uhserver.com",
        database: 'db_sokits',
        user: "sokits",
        password: "@Ajwog7eg2"
    });

    con.connect(function(err) {
        
        if (err) throw err;
       
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Connected!"
        };

    });


}