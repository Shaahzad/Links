import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/index.js";

dotenv.config();

mongoose.connect(process.env.mongo)
    .then(() => {
        console.log("connected to db");
    })
app.use(cors({
    origin: "https://mern-crud-front-sigma.vercel.app",
    credentials: true
}));

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("server is running");
})
app.use("/api", router)


app.listen(process.env.port, () => {
    console.log("server is running");
});
