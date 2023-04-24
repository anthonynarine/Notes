import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "noteSlice",
    initialState:{
        noteList: []
    },
    reducers: {
        setNoteList: (state, action) =>{
            state.noteList = action.payload
        },
        addNote: (state, action) =>{
            state.noteList.push(action.payload);
            //we are pushing the data we send from create note to the noteList []
        }
    },
});

export const noteReducer = noteSlice.reducer;
//actions exported
export const { setNoteList, addNote } = noteSlice.actions;