//Objeto de prueba para iniciar el proyecto
class Model {
    constructor(message){
        this.message = message;
    }

    sayMessage(res){
        res.send(this.message);
    }
}

module.exports = Model;