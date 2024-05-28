const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors =require("cors")
const app = express();
const logger=require("morgan")
const mainRoute = require("./routes/index.js")
dotenv.config()
const port = 5000
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to mongodb")
    } catch (error) {
        throw error;
    }
}
//middlewares
app.use(logger("dev"))
app.use(express.json())
app.use(cors())
app.use("/api",mainRoute)

app.listen(port, () => {
    connect()
    console.log(`Sunucu ${port}portunda çalışıyo`);
})