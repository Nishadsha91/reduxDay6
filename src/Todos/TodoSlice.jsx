import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({

  name: 'todo',
  initialState: [],
  reducers: {

    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: { id: Date.now(), text },
        }},
    },

    deleteTodo: {
      reducer(state, action) {
        return state.filter(todo => todo.id !== action.payload);
      }},

    editTodo: {
      reducer(state, action) {
        const { id, text } = action.payload;
        const todo = state.find(todo => todo.id === id);
        if (todo) {
          todo.text = text;
        }
      },
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
