import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        todos: ['a', 'a', 'a', 'a', 'a']
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeLastTodo(state) {
            state.todos.pop()
        }
    }
})

export default toolkitSlice.reducer
export const {addTodo, removeLastTodo} = toolkitSlice.actions