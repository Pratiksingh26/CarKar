const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required : true,
            min : [3, "Firstname should be atleast 3 characters long"]
        },
        lastname:{
            type: String,
            min : [3, "Lastname should be atleast 3 characters long"]
        }
    },
    email:{
        type : String,
        unique : true,
        required : true,
        lowercase : true,
        match : [/\S+@\S+\.\S+/, "Please enter a valid email"]
    },
    password : {
        type : String,
        min : [6, "Password should be atleast 6 characters long"],
        select : false
    },
    socketId : {
        type : String,

    },

    status : {
        type : String,
        enum : ["active", "inactive"],
        default : "inactive"
    },

    vehicle : {
        color : {
            type : String,
            required : true,
            min : [3, "Color should be atleast 3 characters long"]
        },
        plate : {
            type : String,
            required : true,
            min : [3, "Plate should be atleast 3 characters long"]
        },
        capacity : {
            type : Number,
            required : true,
            min : [1, "Capacity should be atleast 1"]
        },
        vehicleType : {
            type : String,
            enum : ["car", "bike", "auto"],
            required : true
        }
    },
    location :{
        lat : {
            type : Number
        },
        lon : {
            type : Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token =  jwt.sign({_id : this._id}, process.env.JWT_SECRET, {expiresIn : "24h"})
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;