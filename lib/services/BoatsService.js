class BoatsService {

    static findById(boats, id){
        const BoatsId = boats.filter((boat) => boat.id === id);
        return BoatsId;
    }

    static findBoatsCaptureById(boats, id){
        
        const BoatsCaptureId = boats.filter((boat) => boat.id === id);
        const BoatsCapture = BoatsCaptureId.map((boat) => boat.captura);
        return BoatsCapture;
    }

    static getLimitCapture(boats){
        if(boats.captura >= 100){
            boats.count = "Ya no puedes zarpar, has llegado a tu limite de capturas";
            return boats;
        }else{
            boats.count = boats.captura;
            return boats;
        }
    }

    static applyLimitCapture(captura){
        if(captura >= 100){
            return "Ya no puedes zarpar, has llegado a tu limite de capturas";
        }else{
            return "Has zarpado " + captura+ " veces" ;
        }
    }

}

module.exports = BoatsService;