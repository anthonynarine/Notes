import {useState} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NoteForm from "../components/noteForem/NoteForm";

function Note() {
  const { noteId } = useParams();
  // console.log("***", params)

  // if the id is accessed from the store it will be undefined b/c it's a str
  //  a == sign can be used or converting the in to a string in the store will fix this.
  const note = useSelector(
    (store) => store.noteSlice.noteList.find((note) => note.id === noteId)
    // find method iterates over all the notes
  );
  console.log("***", note);


  const [isEditable, setIsEditable] = useState(false);

  const submit = (formValues) => {
    alert("submit")
  }

  //note comes from the store which is filled by using an async request so it takes time
  //so we wait for the note. so the note is not defined at the first render note && checks 
  //to see if the note is available before executing the code that follow 
  return (
    <div>
  {/* if note the note exist then note form is rendered */}
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit Note" : note.title}
          note={note}
          onClickDelete={() => alert("deleted")}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit }
 // if the note is editable submit is sent otherwise it will send undefined
        />
      )}
    </div>
  );
}

export default Note;
