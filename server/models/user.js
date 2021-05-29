const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt=require('bcrypt')


const userSchema = new Schema({
  username:{
      type:String,
      min:[4,"min lenth is 4"],
      max:[32,"max lenth is 32"]
  },
  email:{
      type: String,
      min:[4,"min lenth is 4"],
      max:[32,"max lenth is 32"],
      unique:true,
      lowercase:true,
      required:"email is required",
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
    password: {
        type: String,
        min: [4, "min lenth is 4"],
        max: [32, "max lenth is 32"],
        required:"password is required"
    },
    rentals: [{ type: Schema.Types.ObjectId, ref:'Rental'}]
});

userSchema.methods.hasSamePassword = function (requestedpassword) {
    return bcrypt.compareSync(requestedpassword,this.password)
    
}

userSchema.pre("save",function (next) {
    const user=this;
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password=hash;
            next();
            // Store hash in your password DB.
        });
    });
    
})
module.exports = mongoose.model('user', userSchema)