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
import { ValidatorService } from "../../services/validator";
import { FieldError } from "../FieldError/fieldError";

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

const VALIDATOR = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  body: (value) => {
    return ValidatorService.min(value, 3);
  },
};

// VALIDATOR testing
// console.log(VALIDATOR.title("he")) //testing VALIDATOR min
// console.log(VALIDATOR.title("helloooooooooooooooooooooo")) //testing VALIDATOR max

function NoteForm({ title, onClickEdit, onClickDelete, onSubmit }) {
  //state to hold form value state
  const [formValues, setFormValues] = useState({ title: "", body: "" });

  //state to hold errors
  const [formErrors, setFormErrors] = useState({
    title: undefined,
    body: undefined,
  });

  const updateFormValues = (event) => {
    const id = event.target.id; //targets the id which is our sate
    const value = event.target.value; // targets the state value of that id
    // spreading the note content is needed here or it will remove all other content if edited
    setFormValues({ ...formValues, [id]: value });
    validate(id, value);
  };

  const validate = (id, value) => {
    setFormErrors({ ...formErrors, [id]: VALIDATOR[id](value) });
  };

  const hasError = () => {
    for (const id in formErrors){
      if(formErrors[id]){
        return true
      }
    }
    return false
  }

  const actionIcons = (
    <>
      {/* edit and delete icons will only be shown if the event is sent via props. */}
      <div>{onClickEdit && <Create />}</div>
      <div>{onClickDelete && <Delete />}</div>
    </>
  );

  const titleInput = (
    <div>
      <TextField
        // onChange to update input values
        onChange={updateFormValues}
        color="warning"
        id="title"
        label="Title"
        variant="outlined"
      />
      <div>
        <FieldError message={formErrors.title} />
      </div>
    </div>
  );
  const contentInput = (
    <div>
      <TextField
        // onChange to update input values
        onChange={updateFormValues}
        multiline
        color="warning"
        rows={4}
        fullWidth
        id="body"
        label="Body"
        variant="outlined"
      />
      <div>
        <FieldError message={formErrors.body} />
      </div>
    </div>
  );

  const submitBtn = (
    <>
      <Button disabled={hasError()} onClick={() => onSubmit(formValues)} sx={pageStyles.btn}>
        Submit
      </Button>
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
            xs={6}
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
