import React, { useState } from 'react';
import './Todo.css'

const Todo = () => {

    const [Todos , setTodos] = useState([]);

    const[inputValue,setInputValue] = useState('');

    const addTodo = () =>{
        if(inputValue.trim()!== ''){
            const newTodo = {
                id: new Date().getTime(),
                text: inputValue ,
            }

            setTodos([...Todos,newTodo]);
            setInputValue('');
        }
    }

    const deleteTodo = (id)=>{
        const updateTodos = Todos.filter
        ((Todo)=> Todo.id !==id);
        setTodos(updateTodos)
    }

  return (
    <div className='todo_container'>
        <h1>To do List</h1>
        <input type='text' value ={inputValue}
         onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
        <ul>
            {
                Todos.map((Todo)=>(
                    <li key = {Todo.id}>
                        {Todo.text}
                        <button onClick={()=> 
                        deleteTodo(Todo.id)}
                        >Delete</button>
                        </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default Todo