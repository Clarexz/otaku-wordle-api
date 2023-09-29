const express = require("express");
const router = express.Router();

const AnimeControlador = require("../controllers/anime.js");

router.get("/test", AnimeControlador.prueba);
router.post("/create", AnimeControlador.createData);
router.get("/anime-list", AnimeControlador.animeList);

module.exports = router;