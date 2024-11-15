const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});
// securing password with bycrypt
userSchema.pre('save' , async function(next) { //middleware !! user ki information lene se pehle data run hoga 
// console.log("pre method",this);
const user = this;

if(!user.isModified('password')){  // if password is not changed then next pe jao that is database pe store kro
    next(); // using next middleware we are storing everything into database
}
try{
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, saltRound);
user.password = hash_password;
}
catch(error){
next();
}
})//payload - user-details

userSchema.methods.generateToken = async function () {
    console.log("I am token");
    try {
      return jwt.sign(
        {
          userId: this._id.toString(),
          email: this.email,
          isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY, // server secret key
        {
          expiresIn: "30y",
        }
      );
    } catch (error) {
      console.error("Token Error: ", error);
    }
  };
const User = new mongoose.model("Users" , userSchema);
module.exports = User;
