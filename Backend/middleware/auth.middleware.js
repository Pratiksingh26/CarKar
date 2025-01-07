const userModel = require("../models/user.model");
    const bcrypt = require("bcrypt");
    const jwt = require("jsonwebtoken");

module.exports.userAuth = async(req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;
    if(!token){
        res.status(401).json({message: "unauthorized"})
    }

    const isBlacklisted = await userModel.findOne({token : token});

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