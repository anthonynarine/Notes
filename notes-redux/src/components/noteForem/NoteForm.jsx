import React from "react";
import {
  Container,
  Grid,
  TextField,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { Create, Delete } from "@mui/icons-material";
import { useState } from "react";

const pageStyles = {
  btn: {
    backgroundColor: "black",
    color: "white",
    width: "60%",
    marginBottom: 1,
    borderRadius: 3,
    "&:hover": {
      backgroundColor: "#FF3F00",
    },
  },
};

function NoteForm({ title, onClickEdit, onClickDelete, onSubmit }) {
  //state to hold form values
  const [formValues, setFormValues] = useState({ title: "", body: "" });

  const updateFormValues = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    // spreading the note content is needed here or it will remove all other content if edited
    setFormValues({...formValues, [id]: value });
  };

  const actionIcons = (
    <>
      {/* edit and delete icons will only be shown if the event is sent via props. */}
      <div>{onClickEdit && <Create />}</div>
      <div>{onClickDelete && <Delete />}</div>
    </>
  );

  const titleInput = (
    <>
      <TextField
      // onChange to update input values
        onChange={updateFormValues}
        color="warning"
        id="title"
        label="Title"
        variant="outlined"
      />
    </>
  );
  const contentInput = (
    <>
      <TextField
        onChange={updateFormValues}
        multiline
        color="warning"
        rows={4}
        fullWidth
        id="body"
        label="Body"
        variant="outlined"
      />
    </>
  );

  const submitBtn = (
    <>
      <Button onClick={()=>onSubmit(formValues)} sx={pageStyles.btn}>Submit</Button>
    </>
  );

  return (
    <Container>
      <Paper elevation={15} sx={{ marginTop: "50px", paddingBottom: "1px" }}>
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
              <Typography variant="h6">New note</Typography>
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
          <Grid
            xs={12}
            marginBottom="30px"
            item
            marginLeft="50px"
            marginRight="50px"
          >
            {contentInput}
          </Grid>
        </form>
        <Grid
          xs={12}
          marginBottom="30px"
          item
          marginLeft="28%"
          marginRight="50px"
        >
          {/* only renders if onSubmit is sent via props */}
          {onSubmit && submitBtn}
        </Grid>
      </Paper>
    </Container>
  );
}

export default NoteForm;
