import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "noteSlice",
    initialState:{
        noteList: []
    },
    reducers: {
        setNoteList: (state, action) =>{
            state.noteList = action.payload.map(formatId)
        },
        addNote: (state, action) =>{
            state.noteList.push(formatId(action.payload));
            //we are pushing the data we send from create note to the noteList []
        }
    },
});

function formatId (note){
    return{
        ...note,
        id: note.id.toString(), 
    };
}

export const noteReducer = noteSlice.reducer;
//actions exported
export const { setNoteList, addNote } = noteSlice.actions;