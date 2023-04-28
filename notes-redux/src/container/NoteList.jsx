import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NoteCard from "../components/NoteCard";
import { useNavigate, } from "react-router-dom";

function NoteList(props) {
  //to access noteList from store
  const noteList = useSelector((store) => store.noteSlice.noteList);

  const navigate = useNavigate();

  return (
    <Container justifyContent="center">
      <Grid marginTop={3} container spacing={1} justifyContent="space-between">
        {noteList.map((note) => (
          <Grid onClick={()=>navigate(`/note/${note.id}`)} item key={note.id} xs={6} md={6} lg={4} xl={3}>
            <NoteCard
              title={note.title}
              created={note.created}
              body={note.body}    
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default NoteList;
