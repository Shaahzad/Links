import mongoose from "mongoose";


const Todo = new mongoose.Schema({
    task: {
        type: [String],
        required: true
    }
}, { timestamps: true })


export default mongoose.model("Todo", Todo)