import todosReducer from "./Todos/TodoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer : {
        todos : todosReducer,
    }
    
})
