import express from "express";
import { addTodo, deleteTodo, getTodo, updateTodo } from "../controllers/index.js";


const router = express.Router();


// addtodo
router.post("/addtodo", addTodo)
// gettodo
router.get("/gettodo", getTodo)
// updatetodo
router.put("/updatetodo/:id", updateTodo)
// deletetodo
router.delete("/deletetodo/:id", deleteTodo)


export default router