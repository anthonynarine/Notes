import React from 'react'
import NoteForm from '../components/noteForem/NoteForm'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addNote } from '../store/notes-slice'
import { useNavigate } from 'react-router-dom'

function NoteCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (formValues) =>{
    try {
      const createNote = await axios.post("http://127.0.0.1:8000/api/notes/create/", formValues);
      //dispatching addNote action to noteList [] in note-slice
      dispatch(addNote(createNote))
      alert("note created")     
    } catch (error) {
      console.log(error)     
    }
    navigate("/");
  }


  return (
    <div>
      
      <NoteForm title="New Note" onSubmit={submit} />

    </div>
  )
}

export default NoteCreate
