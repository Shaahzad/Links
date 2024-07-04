import Todo from "../models/todo.js"
import mongoose from "mongoose"



export const addTodo = async (req, res) => {
    try {
        //empty task
        if(!req.body.task){
            return res.status(400).json({message: "Task can't be empty"})
        }
        const newTodo = new Todo({task: req.body.task})
        await newTodo.save()

        res.status(200).json({message: "Todo added successfully"})
         
    } catch (error) {
        console.log(error)
    }
}

// get all todos with realtime
export const getTodo = async (req, res) => {
    try {
        const todo = await Todo.find()
        
        res.status(200).json({todo})

    } catch (error) {
        console.log(error)
    }
}


// update todo

export const updateTodo = async (req, res) => {
    try {
         await Todo.findByIdAndUpdate(req.params.id, {task: req.body.task})
          
        res.status(200).json({message: "Todo updated successfully"})

    } catch (error) {
        console.log(error)
    }
}
// delete todo

export const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Todo deleted successfully"})
    } catch (error) {
        console.log(error)
    }
}