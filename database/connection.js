const mongoose = require("mongoose");
const conexion = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/otaku_wordle");
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log("Error conectando a la base de datos");
        console.log(error);
    }
}
module.exports = conexion;