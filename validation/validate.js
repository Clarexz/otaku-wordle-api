const {isEmpty, isLength} = require("validator");
const validarAnime = (parametros) => {
    try {
        const {title, characters} = parametros;

        const errors = [];

        if (isEmpty(title) || isEmpty(characters)) {
            return {
                status: "error",
                message: "Faltan datos por enviar"
            }
        }
        if (!isLength(title, {min: 3, max: 255})) {
            return {
                status: "error",
                message: "El título debe tener entre 3 y 255 caracteres"
            }
        }

        if (errors.length > 0) {
            return {
                status: "error",
                message: "Datos de entrada inválidos",
                errors: errors
            };
        }

        return {
            status: "ok",
            message: "Anime validado correctamente"
        }
    } catch (error) {
        return {
            status: "error",
            message: "Faltan datos por enviar"
        }
    }
}
module.exports = validarAnime;