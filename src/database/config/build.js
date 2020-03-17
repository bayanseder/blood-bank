const fs = require('fs');
const {join}=require('path');
const connection = require('./connection');

const dbBuild = (cb)=>{
    const creatTable =fs.readFileSync(join(__dirname,'build.sql')).toString();
    const insertValue =fs.readFileSync(join(__dirname,'data.sql')).toString();
    return connection.query(creatTable).then((res)=>
         connection.query(insertValue).then((res)=>console.log('done')))
         .catch(err => console.log("err", err))
    
}

dbBuild() ;