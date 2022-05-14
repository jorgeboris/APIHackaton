const Reader = require("./lib/utils/Reader");
const BoatsService = require("./lib/services/BoatsService");
const BoatsController = require("./lib/controllers/BoatsController");

const boats = Reader.readJsonFile("boats.json");


//console.log(BoatsController.getCaptureNumber(15));
//console.log(BoatsService.findById(boats, 1))
//console.log(BoatsController.getBoatsbyId(2))
//console.log(BoatsService.findBoatsCaptureById(boats, 1))
console.log(BoatsController.getBoatsCaptureById(1));