const rideModel = require("../models/ride.model");
const mapService = require("./maps.service");



async function getFare(pickup, destination){
    if(!pickup || !destination){
        throw new Error("Pickup and destination are required.");
        
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const baseFare = {
        auto : 30,
        car : 50,
        motorcycle : 20,
    }

    const perKmRate = {
        auto : 10,
        car : 15,
        motorcycle : 8,
    }

    const perMinuteRate = {
        auto : 2,
        car : 3,
        motorcycle : 1.5,
    }

    const fare = {
        auto : baseFare.auto + (distanceTime.distance * perKmRate.auto) + (distanceTime.time * perMinuteRate.auto),
        car : baseFare.car + (distanceTime.distance * perKmRate.car) + (distanceTime.time * perMinuteRate.car),
        motorcycle : baseFare.motorcycle + (distanceTime.distance * perKmRate.motorcycle) + (distanceTime.time * perMinuteRate.motorcycle),
    };

    return fare;
}

module.exports.createRide = async ({user, pickup, destination, vehicleType}) => {

if(!user || !pickup || !destination || !vehicleType){
    throw new Error("User, pickup, destination and vehicle type are required.");
}

    const fare = await getFare(pickup, destination);

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        fare: fare[vehicleType]
    })

}