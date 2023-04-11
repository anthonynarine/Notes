import { configureStore } from "@reduxjs/toolkit"
import { noteReducer } from "./notes-slice";

export const store = configureStore({
    reducer: {
        noteSlice: noteReducer
    },
});