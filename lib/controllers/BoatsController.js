const Reader = require("./../utils/Reader");
const BoatsService = require('./../services/BoatsService')

class BoatsController{

    static getBoatsbyId(id){
        const boats = Reader.readJsonFile("boats.json");
        const getBoats = BoatsService.findById(boats, id);
        return getBoats;
    }

    static getBoatsCaptureById(id){
        const boats = Reader.readJsonFile("boats.json");
        const getCapture = BoatsService.findBoatsCaptureById(boats, id)
        return getCapture;
    }
    
    static getCaptureNumber(captura){
        const getNumber = BoatsService.applyLimitCapture(captura);
        return getNumber;
    }

}

module.exports = BoatsController;