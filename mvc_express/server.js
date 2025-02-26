require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./routes/main");
const CORS = require("cors");
const MORGAN = require("morgan");
const mongoose = require("mongoose");


// VARIAVEIS DE AMBIENTE
const port = process.env.PORT;
const mongoURI = process.env.mongoURI;

//CONF
    //DB
        mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=> console.log("Conectado"))
        .catch(()=> console.log("Erro na Coneccao"));
    //MIDLEWARES
        app.use(express.json());
        app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.send("Rota principal");
})


app.use("/", route);
app.listen(port, ()=> console.log(`http://localhost:${port}`) )
