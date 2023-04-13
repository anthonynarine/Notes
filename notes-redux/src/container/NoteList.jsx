import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NoteCard from "../components/NoteCard";

function NoteList(props) {
  //to access noteList from store
  const noteList = useSelector((store) => store.noteSlice.noteList);

  return (
    <Container justifyContent="center" >
      <Grid marginTop={3} container spacing={2} justifyContent="space-between" >
        {noteList.map((note) => (
          <Grid item key={note.id} xs={6} md={6} lg={4}>
            <NoteCard title={note.title} body={note.body} date={note.created} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default NoteList;
