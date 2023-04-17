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
import { DeleteOutlined, Height } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

let IconButtonSx = styled(IconButton)({
  color: "gray",
  "&:hover": {
    color: "red",
    backgroundColor: "black",
  },
});

let boxSx = {
  // height: 300,
  // width: 300,
  marginTop: 0,
  borderRadius: 5,
  boxShadow: 10,
  "&:hover": {
    border: "2px  solid #FDB275",
  },
};

function NoteCard({ title, body, created }) {
  return (
    <Box sx={boxSx}>
      <CardActionArea>
        <Card sx={{borderRadius:5}} >
          <CardHeader
            action={
              <IconButtonSx color="red">
                <DeleteOutlined />
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
