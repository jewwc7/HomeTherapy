import React, { useContext } from "react";
import {
  Drawer,
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
  makeStyles,
} from "@material-ui/core";
import AppContext from "./context/appContext";
import { Link, useHistory } from "react-router-dom";

const Modal = () => {
  const appContext = useContext(AppContext);
  const { modalVisible, setModalVisible } = appContext;
  const classes = useStyles();
  const history = useHistory();
  async function goToPage(page) {
    history.push(page);
  }
  return (
    <Drawer
      anchor="bottom"
      open={modalVisible}
      //  classes={{ paper: classes.paper }}
      onClick={() => setModalVisible(false)}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="text"
          style={{ fontSize: 20 }}
          onClick={() => setModalVisible(false)}
        >
          X
        </Button>
      </div>
      <div className={classes.modalContainer}>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        ></div>
        <List style={{ paddingTop: "3%" }}>
          <ListItem
            button
            divider
            onClick={() => {
              goToPage("/");
            }}
            style={styles.linkText}
          >
            {" "}
            Home
          </ListItem>
          <ListItem
            button
            divider
            onClick={() => {
              goToPage("/services");
            }}
            style={styles.linkText}
          >
            Massages
          </ListItem>
          <ListItem
            button
            divider
            onClick={() => {
              goToPage("/");
              setTimeout(() => {
                window.scrollTo({
                  top: 3020,
                  behavior: "smooth",
                });
              }, 500);
            }}
            style={styles.linkText}
          >
            Meet the Massuese
          </ListItem>
          <ListItem
            button
            divider
            onClick={() => {
              goToPage("/");
              setTimeout(() => {
                window.scrollTo({
                  //this is how you scroll to bottom of page, used timeout so the new pages coordinates can be used(w/o timeout will scroll as far as prior page went down)
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }, 500);
            }}
            style={styles.linkText}
          >
            Contact
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

const useStyles = makeStyles({
  modalContainer: {
    //had to put a div within the drawer becuase I could not get the actual drawer to change colors, this works though
    //backgroundColor:'rgba(27, 29, 30, 1)',
    backgroundColor: "rgba(210,210,210,.3)",
    height: "100%",
    width: "100%",
  },
  listItem: {
    backgroundColor: "red",
    borderWidth: 5,
    borderColor: "blue",
  },
});

const styles = {
  linkText: {
    color: "rgba(70,70,70,1)",
    textDecoration: "none",
    fontSize: 20,
  },
};

export default Modal;
