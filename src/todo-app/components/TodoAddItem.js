import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodos, updateTodos } from '../features/todoSlice'
import styled from 'styled-components'

const TodoForm = styled.form`
    width: 100%;
    min-width: 400px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 20px 0;
    padding: 20px 20px;
    background-color: white;
    box-shadow: 3px 4px 3px rgba(0,0,0,0.6);
    div {
        display: flex;
        align-items: flex-end;
        width: 100%;
        margin: 20px 0;
        label {
            font-size:20px;
            font-weight: 600;
            margin-right: 5px;
        }
        input {
            border: none;
            border-radius: 2px;
            padding: 5px 5px;
            width: 100%;
            outline: 1px solid rgba(0,0,0,0.3);
            font-size:18px;
        }
        input[type="text"]:focus {
            border: solid 1px rgba(0,0,0,0.5);
        }
    }
    button {
        border-radius: 1px;
        width: 40%;
        border: none;
        outline: 1px solid rgba(0,0,0,0.5);
        padding: 6px 10px;
        margin: 5px 17px;
        color: black;
        font-weight: 600;
        font-size: 16px;
        /* background-color: rgba(0,0,0,0.8); */
        display: inline-block;
    }
`

const TodoAddItem = ({ id, task, handleChange, todos, setTodos }) => {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.preventDefault();
        if(task === "") {
            alert("input type must be required")
        } else {
            dispatch(addTodos({id: todos.length+1, task: task}))
        }
        setTodos({id:'', task:''})
    }
    const updateTodoItem = (e) => {
        e.preventDefault()
        dispatch(updateTodos({id: id, task: task}))
        setTodos({id:'', task:''})
    }
  return (
    <TodoForm>
        <div>
            <label htmlFor='task'>Todo: </label>
            <input type="text" name="task" value={task} placeholder="..." onChange={handleChange} />
        </div>
        <button onClick={handleClick}>
            Add Todo
        </button>
        <button type='submit' onClick={updateTodoItem}>
            Update Todo
        </button>
    </TodoForm>
  )
}

export default TodoAddItem