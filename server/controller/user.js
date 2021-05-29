const User =require("../models/user")
const jwt=require('jsonwebtoken')

exports.auth = function (req,res) {

    console.log("req.bosy", req.body);
    const {  email, password } = req.body;
    if (!password || !password) {
        return res.status(422).send({ "title": "Data missing", "details": "provided data missing" })
    }
    User.findOne({ "email": email }, function (err, user) {
        if (err) {
            return res.status(422).send({ "title": "invalid mongo err", "details": "exist user err" + err })
        } else {
            if (!user) {
                return res.status(422).send({ "title": "invalid user", "details": "user not exist" })
            }
            if (user.hasSamePassword(password)){
               const token= jwt.sign({
                   userId:user._id,
                   useename:user.username
                }, 'secret', { expiresIn: '1h' });
                return res.json(token)
            }else{
                return res.status(422).send({ "title": "invalid password", "details": "incoorect password" })
            }
        }
    })
}
exports.register=function (req,res) {
    console.log("req.bosy",req.body);
    const { username, email, password, confimationpassword} = req.body;
    if(!password || !password){
        return res.status(422).send({"title":"Data missing","details":"provided data missing"})
    }
    if (password !== confimationpassword){
        return  res.status(422).send({ "title": "invalid password", "details": "password is not same as confiation password" })
    }
    User.findOne({"email":email},function (err,existuser) {
        if(err){
            return  res.status(422).send({ "title": "invalid mongo err", "details": "exist user err"+err })
        }else{
            if(existuser){
                return res.status(422).send({ "title": "invalid email", "details": "email already exist" })
            }
        }
        const user=new User({
            username:username,
            email:email,
            password:password
        })
        user.save(function (err) {
            if(err){
                return res.status(422).send({ "title": "invalid mongo err", "details": "exist user err" + err })
            }else{
                return res.send({"registered":true})
            }

            
        })
        
    })
    
}
exports.authmiddleware=function (req,res,next) {
    const token = req.headers.authorization;
    if(token){
        const user=parsetoken(token)
        console.log(user);
        
        User.findById(user.userId,function (err,user) {
            if(err){
                return res.status(422).send({ "title": "invalid mongo err", "details": "exist user err" + err })
            }
            if(user){
                res.locals.user=user
                next();
            }
            
        })
    }else{
        return res.status(422).send({ "title": "not authorized", "details": "need login to get access" })
    }
    
}
function parsetoken(token) {
    console.log(jwt.verify(token.split(' ')[1], 'secret'));
    
    return jwt.verify(token.split(' ')[1], 'secret')
}