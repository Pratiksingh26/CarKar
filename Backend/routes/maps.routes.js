const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/auth.middleware")
const {query} = require("express-validator")
const mapController = require("../controllers/map.controller")


router.get("/get-coordinates",
     query("address").isString().isLength({ min:3 }), authMiddleware.userAuth, mapController.getCoordinates);

     router.get("/get-distance-time", 
        query("origin").isString().isLength({ min:3 }),
        query("destination").isString().isLength({ min:3 }),
        authMiddleware.userAuth,
         mapController.getDistanceAndTime
     )


module.exports = router;