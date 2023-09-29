
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const port = 3000;
const conexion = require("./database/connection.js");

conexion();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//Convertir body a objeto js
app.use(express.json()); //Esto es para recibir datos con content-type app/json
app.use(express.urlencoded({extended:true})); //Esto es para recibir datos con content-type app/x-www-form-urlencoded

app.get("/", (req, res) => {
    return res.status(200).send(
        "<h1>Empezando a crear una API Rest con Node</h1>"
    )
})

//Rutas
const rutas_anime = require("./routes/anime.js");

app.use("/api", rutas_anime);