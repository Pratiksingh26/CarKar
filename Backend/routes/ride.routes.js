const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const middleware = require('../middleware/auth.middleware');

router.post("/create",
    middleware.userAuth,
    body("pickup").isString().isLength({min: 3}).withMessage("Invalid pickup address"),
    body("destination").isString().isLength({min: 3}).withMessage("Invalid destination address"),
    body("vehicleType").isString().isIn(["auto","car", "motorcycle"]).withMessage("Invalid vehicle type"),
    rideController.createRide
)

module.exports = router