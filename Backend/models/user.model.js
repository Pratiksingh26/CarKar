const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

// const userSchema = new mongoose.Schema({
//     fullname: {
//         firstname: {
//             type: String,
//             required: true,
//             minlength: [ 3, 'First name must be at least 3 characters long' ],
//         },
//         lastname: {
//             type: String,
//             minlength: [ 3, 'Last name must be at least 3 characters long' ],
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         // index : true,
//         // sparse : true,
//         minlength: [ 5, 'Email must be at least 5 characters long' ],
//     },
//     password: {
//         type: String,
//         required: true,
//         select: false,
//     },
//     socketId: {
//         type: String,
//     },
// })

// userSchema.methods.generateAuthToken = function () {
//     const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
//     return token;
// }

// userSchema.methods.comparePassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// }

// userSchema.statics.hashPassword = async function (password) {
//     return await bcrypt.hash(password, 10);
// }

// const userModel = mongoose.model('user', userSchema);

const userSchema = new mongoose.Schema({
    fullname: {
      firstname: {
        type: 'string',
        required: true,
        minlength: [3, 'first name must be at least 3 char'],
      },
      lastname: {
        type: 'string',
   
        minlength: [3, 'first name must be at least 3 char'],
      },
    },
    email:{
      type: 'string',
      required: true,
      unique:true,
      minlength:[5, "first name must be at least 3 char"]
  },
  password:{
      type: 'string',
      required: true,
      select:false
  },
  socketID:{
      type: 'string',
  }
  })
   
  userSchema.methods.generateAuthToken=function(){
      const token=jwt.sign({_id:this.id},process.env.JWT_SECRET, {expiresIn:'24h'})
      return token
  }
   
  userSchema.methods.comparePassword=async function(password){
      return bcrypt.compare(password, this.password)
  }
   
   
  userSchema.statics.hashPassword = async function (password) {
      return bcrypt.hash(password, 10);
    };
   
   
   
  const userModel=mongoose.model("user",userSchema)
   
  module.exports=userModel;


// module.exports = userModel;