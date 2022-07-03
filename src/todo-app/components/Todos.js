import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TodoAddItem from './TodoAddItem';
import Todo from './Todo'
import { deleteTodos } from '../features/todoSlice'

const Todos = () => {
    const todos = useSelector((state)=> state.todos.todos)
    const dispatch =  useDispatch()
    const [todo, setTodo] = useState({ id:'', task:'' })
    const { id, task} = todo;
    const handleChangeTodo = (e) => {
        setTodo({...todo, [e.target.name]:e.target.value})
    }
    const EditTodo = (data) => { setTodo(data) }
    const DeleteTodo = (id) => { dispatch(deleteTodos(id)) }
  return (
    <div>
        <TodoAddItem 
            id={id} task={task} todos={todos} setTodos={setTodo}
            handleChange={handleChangeTodo}
        />
         {todos.map((todo)=>{
            return (
                <div key={todo.id}>
                    <Todo id={todo.id} task={todo.task} deleteTodo={()=>DeleteTodo(todo.id)} editTodo={()=>EditTodo(todo)} />
                </div>
                
            )
        })}
    </div>
  )
}

export default Todos