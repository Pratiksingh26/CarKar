const userModel = require("../models/user.model");
    const bcrypt = require("bcrypt");
    const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.userAuth = async(req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;
    if(!token){
        res.status(401).json({message: "unauthorized"})
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token : token});

    if(isBlacklisted){
        res.status(401).json({message: unauthorized})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        
        req.user = user;
        return next()
    }
    catch(err){
        res.status(401).json({message:"unauthorized"})
    }
}

module.exports.authCaptain = async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if(!token){
         res.status(401).json({message: "unauthorized"})
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token: token})

    // console.log(isBlacklisted)

    if(isBlacklisted){
        res.status(401).json({message:"unauthorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;
        return next()
        
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
    }
}

// Token Extraction:

// Token is retrieved from either the Authorization header or cookies.
// Token Validation:

// If no token is provided, return a 401 Unauthorized error.
// Verify the token to ensure it's valid and not expired.
// Fetch User:

// Use the token's payload (_id) to retrieve the user's data from the database.
// If no user is found, return 401 Unauthorized.
// Attach User:

// Attach the user object to req for subsequent middleware or route handlers.
// Error Handling:

// If any step fails, return a 401 Unauthorized response with an appropriate error message.