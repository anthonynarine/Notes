import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { NoteAdd, NoteAlt, ControlPoint } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import React from "react";

let StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  height: "30px",
 
});

let Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2px",
  alignItems: "center",
  //   backgroundColor: "white",
}));

function Header() {
  let navigate = useNavigate();

  return (
    <AppBar sx={{ margin: 0, backgroundColor:"#D66C16", }} position="sticky">
      <StyledToolbar>
        <Typography
          onClick={() => navigate("/")}
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
        >
          <Icons>
            <NoteAlt fontSize="large"/>
            Notes
          </Icons>
        </Typography>
        <NoteAdd sx={{ display: { xs: "block", sm: "none" } }} />
        <Icons>
          <Button onClick={() => navigate("/note/add")} sx={{ color: "white" }}>
            <ControlPoint fontSize="large" />
          </Button>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
