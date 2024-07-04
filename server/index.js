import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/index.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.use("/api", router)


mongoose.connect(process.env.mongo)
    .then(() => {
        console.log("connected to db");
    })
app.listen(process.env.port, () => {
    console.log("server is running");
});
