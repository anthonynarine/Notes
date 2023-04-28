import React from "react";
import {
  Container,
  Grid,
  TextField,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { Create, Delete, Tune } from "@mui/icons-material";
import { useState } from "react";
import { ValidatorService } from "../../services/validator";
import { FieldError } from "../FieldError/fieldError";

const pageStyles = {
  btn: {
    backgroundColor: "#274C43",
    color: "#D8CCBD",
    width: "60%",
    marginBottom: 1,
    borderRadius: 3,
    "&:hover": {
      backgroundColor: "#589F7E",
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

function NoteForm({
  isEditable = true,
  note,
  title,
  onClickEdit,
  onClickDelete,
  onSubmit,
}) {
  //state to hold form value state
  const [formValues, setFormValues] = useState({
    title: note?.title,
    body: note?.body,
  });
  //since the note title can be undefined the ? is use as a test

  //state to hold errors
  const [formErrors, setFormErrors] = useState({
    // if we have the note.title we send an undefined so we dont get an error
    title: note?.title ? undefined : true,
    body: note?.body ? undefined : true,
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
    for (const id in formErrors) {
      if (formErrors[id]) {
        return true;
      }
    }
    return false;
  };

  const actionIcons = (
    <div>
      {/* edit and delete icons will only be shown if the event is sent via props. */}
      <div>
        {onClickEdit && (
          <Create onClick={onClickEdit} sx={{cursor: "pointer" }} />
        )}
        {onClickDelete && <Delete onClick={onClickDelete} sx={{marginLeft: 5, cursor: "pointer"}} />}
      </div>
      <div></div>
    </div>
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
        value={formValues.title}
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
        value={formValues.body}
      />
      <div>
        <FieldError message={formErrors.body} />
      </div>
    </div>
  );

  const submitBtn = (
    <div>
      <Button
        disabled={hasError()}
        onClick={() => onSubmit(formValues)}
        sx={pageStyles.btn}
      >
        Submit
      </Button>
    </div>
  );

  return (
    <Container>
      <Paper elevation={15} sx={{ marginTop: "50px", paddingBottom: "1px" }}>
        <form>
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
                <Typography variant="h6">
                  {isEditable ? "Edit note" : title}
                </Typography>
              </Grid>
              <Grid item sx={4}>
                {actionIcons}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            xs={6}
            item
            alignItems="start"
            marginLeft="50px"
            marginBottom="30px"
          >
            {isEditable && titleInput}
          </Grid>
          <Grid
            xs={12}
            marginBottom="30px"
            item
            marginLeft="50px"
            marginRight="50px"
          >
            {isEditable ? contentInput : note.body}
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
