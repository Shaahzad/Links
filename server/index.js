import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/index.js";

dotenv.config();
const app = express();
app.use(express.json());


app.use(cors({
    origin: "https://mern-crud-front-sigma.vercel.app",
    credentials: true
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://mern-crud-front-sigma.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


app.get("/", (req, res) => {
    res.send("server is running");
})
app.use("/api", router)


mongoose.connect(process.env.mongo)
    .then(() => {
        console.log("connected to db");
    })
app.listen(process.env.port, () => {
    console.log("server is running");
});
