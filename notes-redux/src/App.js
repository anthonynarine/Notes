import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNoteList } from "./store/notes-slice";
import { NoteAPI } from "./api/notes-api";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchAllNotes(){
      try {
        const noteList = await NoteAPI.fetchAll()
        dispatch(setNoteList(noteList))  
        console.log(noteList)  
      } catch (error) {
        console.log(error)    
      };
    }
    fetchAllNotes();
  });






  return (
    <div >
      <Header />
      <Outlet/>
{/* since children routes have been passed to app (see index.js) 
to tell react to render these children Outlet that comes with 
react-router tell react to render app with a child route ex http://localhost:3000/notes/add/ */}
  app here
    </div>
  );
}

export default App;
