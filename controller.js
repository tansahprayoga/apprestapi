'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("APLIKASI REST API BERJALAN",res)
};

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function (req,res){
    connection.query('SELECT * FROM mahasiswa',function(error, rows, field){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};
