const express = require('express')
const router = express.Router()
const rentals=require('../models/rental')
const userctrl=require("../controller/user")

router.get("/scecrt",userctrl.authmiddleware,function (req,res) {
    res.json({"scecrt":true})
    
})

router.get('/', function (req, res) {
   
    rentals.find({},function (err,rentalres) {
        if(err){
        res.send(err)
        }else{
            res.send(rentalres)
        }
        
    })
})
router.get('/:id',function (req,res) {
    const rentalid=req.params.id
    rentals.findById(rentalid,function (err,respo) {
        if(err){
            res.send(err)
        }else{
            res.send(respo)
        }
        
    })
    
})
module.exports = router