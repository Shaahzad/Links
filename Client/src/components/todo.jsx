import React, { useEffect, useState } from 'react'
import './todo.css'
import axios from 'axios'
import {Toaster, toast} from 'react-hot-toast'
import { MdDelete } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";



const Todo = () => {
const [todoval, settodoval] = useState("")
const [alltodo, setalltodo] = useState([])
const [todoedit, settodoedit] = useState({})
const AddHandler = async ()=>{
  try {
    const response = await axios.post("https://mern-crud-backend-umber.vercel.app/api/addtodo",{task: todoval})
    if(todoval === ""){
      toast.error(response.data.message)
      return
    }
  console.log(response.data)
    toast.success(response.data.message)
    settodoval("")
  } 
  catch (error) {
    toast.error(error?.response?.data?.message)
  }
}

// get all todos with realtime
useEffect(() => {
  const getalltodo = async () => {
    try {
      const response = await axios.get("https://mern-crud-backend-umber.vercel.app/api/gettodo")
      setalltodo(response.data.todo)
    } catch (error) {
      console.log(error)
    }
  }
  getalltodo()
}, [alltodo])


// delete todo
const HandelDelete = async (id) => {
  try {
       const res = await axios.delete(`https://mern-crud-backend-umber.vercel.app/api/deletetodo/${id}`)
       console.log(res.data)
       toast.success(res.data.message)
  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
  }
  }

  // how to update todo
  const HandelEdit = async (id) => {
    const todoedit = alltodo.find((todo) => todo._id === id)
    settodoval(todoedit.task)
    settodoedit(todoedit)
  }

  const HandelUpdate = async (id) => {
    try {
      const response = await axios.put(`https://mern-crud-backend-umber.vercel.app/api/updatetodo/${id}`,{task: todoval})
       
      toast.success(response.data.message)
      settodoval("")
      settodoedit({})
    } catch (error) {
       toast.error(error.response.data.message)
    }
  }

  return (
    <>
    <div className='todo-form'>
    <div className='form'>
    <h1>Todo</h1>
    <div className='input-div'>
      <input type="text" className='input' value={todoval} placeholder='Enter Todo' onChange={(e) => settodoval(e.target.value)}/>
      <button className='btn' onClick={todoedit._id ? () => HandelUpdate(todoedit._id) : AddHandler}>
        {todoedit._id ? "Update" : "Add"}
      </button>
      <Toaster/>
    </div>
    </div>
    {
      alltodo.length === 0 ? (
        <h1>No Todo</h1>
      )
      : (
        alltodo.map((todo) => (
          <div className='task' key={todo._id}>
            <p>{todo.task}</p>
            <div className='icons'>
            <MdDelete size={25} onClick={() => HandelDelete(todo._id)} style={{cursor: "pointer"}}/>
              <BsFillPencilFill size={25} style={{cursor: "pointer"}} onClick={() => HandelEdit(todo._id)}/>
            </div>
          </div>
        )
      )
    )
    }
    
    </div>

    </>
  
  )
}


export default Todo