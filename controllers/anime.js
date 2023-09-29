const express = require("express");
const router = express.Router();
const Anime = require("../models/Anime.js");
const validarAnime = require("../validation/validate.js");
const prueba = (req, res) => {
    return res.status(200).json({message: "Prueba de ruta"});
}

const createData = async (req, res) => {
    const { title, characters } = req.body;


    try {
        // Busca un anime existente con el mismo título
        let anime = await Anime.findOne({ title });

        if (!anime) {
            // Si no existe, crea un nuevo anime
            anime = new Anime({ title, characters: [] });
        }

        // Agrega los personajes al anime existente
        anime.characters.push(...characters);

        // Guarda el anime actualizado en la base de datos
        await anime.save();

        return res.status(200).json({
            status: "success",
            anime,
            message: "Personajes agregados al anime correctamente"
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "Error al crear o actualizar el anime"
        });
    }
}

const animeList = async (req, res) => {
    try {
        const animes = await Anime.find();
        return res.status(200).json({
            status: "success",
            animes
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "Error al obtener los animes"
        });
    }
}

module.exports = {
    prueba,
    createData,
    animeList
}