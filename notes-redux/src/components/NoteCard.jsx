import React from "react";

import {Box,Card,CardContent,Typography,IconButton,CardHeader, CardActionArea,} from "@mui/material";
import { DeleteOutlined, Height} from "@mui/icons-material";
import styled from "@emotion/styled";



let IconButtonSx = styled(IconButton)({
  color:"gray",
  "&:hover":{
    color:"red",
    backgroundColor: "black"
  }
});

let boxSx = {
  // height: 300,
  // width: 300,
  marginTop:0, 
  boxShadow: 10,
  "&:hover":{
    border: "1px solid lightgreen"
  }
}


function NoteCard({ title, body, created }) {
  return (
    <Box sx={boxSx}>
      <CardActionArea>
      <Card>
        <CardHeader
          action={
            <IconButtonSx color="red" >
              <DeleteOutlined  />
            </IconButtonSx>
          }
          title={title}
          subheader={created}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {body}
          </Typography>
        </CardContent>
      </Card>
      </CardActionArea>
    </Box>
  );
}

export default NoteCard;
