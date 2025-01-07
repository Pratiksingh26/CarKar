const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
     token : {
        type : String,
        unique : true,
        required : true
    },

    createdAt : {
        type : Date,
        default : Date.now(),
        expires : 86400 // 1 day, 24hrs in seconds
    }
});

module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema)