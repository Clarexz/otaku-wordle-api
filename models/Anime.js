const {Schema, model} = require("mongoose");
const AnimeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    characters: [
        {
            name: {
                type: String,
                required: true
            }
        }
    ]

});

module.exports = model("Anime", AnimeSchema, "animes");