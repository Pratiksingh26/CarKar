const mapService = require('../services/maps.service');
const axios = require("axios")
const { validationResult, query } = require('express-validator');
const { authCaptain } = require('../middleware/auth.middleware');

module.exports.getCoordinates = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {address} = req.query;

    try{
        const coordinates = await mapService.getAddressCoordinate(address);
         return res.status(200).json(coordinates)
    }
    catch(error){
        return res.status(404).json({ message: error.message || "Coordinate not found."}) 
    }
}

module.exports.getDistanceAndTime = async (req, res, next) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { origin, destination } = req.query;

        const distanceTime = await mapService.getDistanceTime(origin, destination);

        res.status(200).json(distanceTime);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
   try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { input } = req.query;

    const suggestions = await mapService.getAutoCompleteSuggestions(input);

    res.status(200).json(suggestions)
   }
    catch(error){
        console.error(error.message)
         return res.status(404).json({ message: error.message || "Suggestions not found."})
    }
}
