const BoatsController = require("./controllers/BoatsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Api welcome!"});
});

app.get("/v1/boats/:id", (request, response) => {
    const idBoat = parseInt(request.params.id);
    const Boat = BoatsController.getBoatsbyId(idBoat);
    response.json(Boat);
});

app.get("/v1/boats/capture/:id", (request, response) => {
    const idBoat = parseInt(request.params.id);
    const BoatCapture = BoatsController.getBoatsCaptureById(idBoat);
    const BoatLimit = BoatsController.getCaptureNumber(BoatCapture);
    response.json(BoatLimit);
});

app.listen(port, () => {
    console.log(`API in localhost:${port}`);
});