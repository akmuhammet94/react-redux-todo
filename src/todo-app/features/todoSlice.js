import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name:'todos',
    initialState: {
        todos:[],
    },
    reducers:{
        addTodos:(state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodos:(state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
        },
        updateTodos:(state, action) => {
            const newTodo = action.payload;
            state.todos = state.todos.map((todo)=> {
                if(todo.id === newTodo.id) {
                    return newTodo
                } else {
                    return todo;
                }
            })
        }
    }
})

export const { addTodos, deleteTodos, updateTodos } = todosSlice.actions
export default todosSlice.reducer