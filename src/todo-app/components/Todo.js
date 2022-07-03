import React from 'react'
import styled from 'styled-components'
import { AiFillDelete, AiFillEdit  } from 'react-icons/ai'

const TodoArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(255,255,255,0.9);
  margin: 10px auto;
  padding: 10px 10px;
  border-radius: 3px;
  color: black;
  box-shadow: 3px 2px 3px rgba(0,0,0, 0.5);
  h1 {
    font-size: 20px;
    font-weight: 600;
  }
  div {
    display: flex;
    button {
      margin-left: 20px;
    }
    button.delete {   
      i {
        color: red;
      }
    }
    button.edit {   
      i {
        color: green;
      }
    }
  } 
`
const Todo = ({ id, task, deleteTodo, editTodo}) => {
  return (
    <TodoArticle key={id}>
        <h1> {task}</h1>
        <div>
          <button className='delete' onClick={deleteTodo}><i><AiFillDelete />Delete </i></button>
          <button className='edit' onClick={editTodo}><i><AiFillEdit />Edit </i></button>
        </div>
    </TodoArticle>
  )
}

export default Todo