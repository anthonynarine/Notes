import React from "react";
import { Container, Grid, TextField, Paper, Typography, Button } from "@mui/material";

import { Create, Delete } from "@mui/icons-material";


const pageStyles = {
  btn: {
    backgroundColor: "black",
    color:"white",
    width: "60%",
    marginBottom:1,
    borderRadius: 3,
    "&:hover": {
      backgroundColor: "#FF3F00",
    },
  },
};


function NoteForm({title, onClickEdit, onClickDelete, onSubmit}) {

  const actionIcons = (
    <>
      <div>{onClickEdit && <Create />}</div>
      <div>{onClickDelete && <Delete />}</div>
    </>
  );

  const titleInput = (
    <>
      <TextField color="warning" id="title" label="Title" variant="outlined" />
    </>
  );
  const contentInput = (
    <>
    <TextField
      multiline
      color="warning"
      rows={4}
      fullWidth
      id="title"
      label="Content"
      variant="outlined"
    />
    </>
  );

  const submitBtn = <><Button
  sx={pageStyles.btn}
  >Submit</Button></>;

  return (
    <Container >
      <Paper elevation={15} sx={{marginTop:"50px", paddingBottom:"1px"}}> 
      <Grid container justifyContent="center" marginTop="50px">
        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          marginBottom="40px"
          marginTop="25px"
          marginLeft="50px"
          marginRight="50px"
          xs={12}
        >
          <Grid item sx={8}>
            <Typography variant="h6" >New note</Typography>
          </Grid>
          <Grid item sx={4}>
            {actionIcons}
          </Grid>
        </Grid>
      </Grid>
      <form>
        <Grid
          xs={12}
          item
          alignItems="start"
          marginLeft="50px"
          marginBottom="30px"
        >
          {titleInput}
        </Grid>
        <Grid xs={12} marginBottom="30px" item marginLeft="50px" marginRight="50px">
          {contentInput}
        </Grid>
      </form>
        <Grid xs={12} marginBottom="30px" item marginLeft="28%" marginRight="50px">
          {submitBtn}
        </Grid>
      </Paper>
    </Container>
  );
}

export default NoteForm;
