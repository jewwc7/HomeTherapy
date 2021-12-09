import React from "react";
import {
  Grid,
  Button,
  Snackbar,
  Image,
  ButtonGroup,
  Avatar,
  TextField,
  MenuItem,
  List,
  ListItem,
  Chip,
  Paper,
  Fade,
  Slide,
  Hidden,
} from "@material-ui/core";

const CustomChip = ({ title, width, height }) => {
  return (
    <Paper
      elevation={2}
      className="customChip"
      style={{
        width: width ? width : "100%",
        height: height ? height : "100%",
        borderRadius: 50,
        display: "flex",
        padding: 24,
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {title}
    </Paper>
  );
};

export default CustomChip;
