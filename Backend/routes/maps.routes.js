const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/auth.middleware")
const mapsService = require("../services/maps.service")
const mapController = require("../controllers/map.controller")
const {query} = require("express-validator")
const axios = require("axios")


router.get("/get-coordinates",
     query('address').isString().isLength({min:3}), authMiddleware.authUser, mapController.getCoordinates)


module.exports = router