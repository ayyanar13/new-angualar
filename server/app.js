const express= require('express')
const mongoose = require ('mongoose')
var app=express()
var Rental=require('./models/rental')
const Fakedb=require('./models/faksdb')
const Routes=require('./routes/rentals')
app.use(function (req, res, next) {
    console.log("originalurl", req.originalUrl)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api/v1/rentals', Routes)



/** MongoDB Connection */
mongoose.connect('mongodb://' + 'localhost' + ':' + 27017 + '/' + 'hotel-booking')
mongoose.connection.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
});
mongoose.connection.on('connected', function () {
    console.log('MongoDB Connected!');
});
mongoose.connection.on('reconnected', function () {
    console.log('MongoDB reconnected!');
});
mongoose.connection.on('disconnected', function () {
    console.log('MongoDB disconnected!');
});





const port=process.env.port||3000
app.listen(port,function () {
    console.log("running on port", port);
    
    
})