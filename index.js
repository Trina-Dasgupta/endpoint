const express=require('express');
const bodyParser=require('body-parser');
const Connection = require('./db');
const app=express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(require('./routes/route'))
Connection();

app.listen(6000,()=>console.log('Server is on!'));