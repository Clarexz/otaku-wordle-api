const express = require('express')
const app = express()
const names = require("./names")

app.use(express.json())

app.get("/", (req, res) => {
    res.json(names)
})

//Get one anime
app.get("/api/:id", (req, res) => {
    const animeName = names.find(c => c.id === parseInt(req.params.id))

    if(!animeName) { res.status(404).send("Anime name not found")}

    res.send(animeName)
})

app.listen(process.env.PORT || 3000)