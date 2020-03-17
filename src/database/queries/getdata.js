const connection = require('../config/connection');

const getdoners=(callback)=>{
    return connection.query('SELECT * FROM doners;',(err, res) => {
        if (err) {
          return callback(err);
        }
        return callback(null,res.rows);
      })
};
const getpatients =(callback)=>{
    return connection.query('SELECT * FROM patients;',(err, res) => {
        if (err) {
          return callback(err);
        }
        return callback(null,res.rows);
      })
};
const getbloodbank=(callback)=>{
    return connection.query('SELECT * FROM blood_bank;',(err, res) => {
        if (err) {
          return callback(err);
        }
        return callback(null,res.rows);
      })
};
module.exports={getbloodbank,getdoners,getpatients}