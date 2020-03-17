const express = require('express')
const app = express()
const router = require('./controller/router')

app.use(router);

app.listen(3000, ()=>{
    console.log('app is running on port 3000')
});

