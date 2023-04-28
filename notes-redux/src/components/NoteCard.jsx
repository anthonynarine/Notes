import React from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardHeader,
  CardActionArea,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";
import moment from "moment";


let IconButtonSx = styled(IconButton)({
  color: "#623745",
  "&:hover": {
    color: "red",
    backgroundColor: "#274C43",
  },
});

let boxSx = {
  height: 250,
  marginTop: 0,
  borderRadius: 5,
  boxShadow: 5,
  "&:hover": {
    border: "2px  solid #274C43",
  },
};



function NoteCard({ title, body, created }) {


  const formattedDate = () =>{
    return (
      <div>{moment(created).format("Do MMMM YYYY")}</div>
    )
  };
  


  return (
    <Box sx={boxSx}>
      <CardActionArea >
        <Card sx={{borderRadius:5, height:"250px", borderColor: "greenyellow"}} >
          <CardHeader
            action={
              <IconButtonSx color="red">
                <DeleteOutlined />
              </IconButtonSx>
            }
            title={title}
            subheader={formattedDate()}
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
