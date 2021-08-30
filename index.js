const express = require("express");
const path = require('path');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const host = 'localhost';
const port = 80;

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'pug');
app.set('views',path.join(__dirname, 'views'));

//Database Settings
mongoose.connect('mongodb://localhost:27017/MyDB', {useNewUrlParser: true, useUnifiedTopology: true});

const schema = new mongoose.Schema({
    name: String,
    redg_no: Number,
    sec: Number,
    branch:String
});
let scholarship = mongoose.model('scholarship', schema);
// scholarship.find({name:'Iphone 11'},function(err,tables){
//     if (err) return console.error(err);
//     console.log(tables);
// })
// let tables = table.find({name:'Iphone 11'});
// console.log(tables);

//SiteMap
app.get('/',(req,res)=>{
    res.render('index.pug');
    res.status(200)
});
app.post('/',(req,res)=>{
    // let body_data = req.body;
    // console.log(body_data);
    let data = new scholarship(req.body);
    data.save().then(()=>{
        res.status(200).render("success");
    }).catch(()=>{
        res.status(400).render("error");
    });
    
    
   //console.log(res.body);
});



//Listen the server
app.listen(port,host, ()=>{
    console.log("Listening...");
})