const express = require("express");
const cookiParser = require("cookie-parser")
require("dotenv").config();  
require("./models/index");  

const app = express();
const PORT = process.env.PORT || 3000;

function startServer() {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.get("/", (req, res) => {
        res.send("OK")
    })
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    })
}

startServer()