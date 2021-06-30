import React, { useContext, useState, useEffect } from "react";
import AppContext from "./context/appContext";
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
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@material-ui/core";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardActionArea,
} from "@material-ui/core/";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import person19 from "./Photos/person19.jpg";
import person3 from "./Photos/person3.jpg";
import person5 from "./Photos/Person5.jpg";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import myFunctions from "./MyFunctions2";
const { isEqualTo, isGreaterThan } = myFunctions;

const qualifications = [
  "Won Gold Medal",
  "Completed Bachelors Degree",
  "Was on American Idol",
];

const Boss = () => {
  const appContext = useContext(AppContext);
  const {
    lineHeight,
    afterHeaderMargin,
    afterParagraphMargin,
    mainSectionMargin,
    smallScreen,
    textColor,
    thirdColor,
    dispatch,
    currentState,
  } = appContext;
  const photoArr = [person19, person3, person5];
  const [count, setCount] = useState(0);
  function nextPic() {
    if (isEqualTo(count, photoArr.length - 1)) {
      setCount(0);
      return;
    }
    setCount(count + 1);
  }

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <Grid
      container
      justify="center"
      direction="column"
      style={{ marginTop: mainSectionMargin }}
    >
      <Grid
        item
        container
        direction="column"
        xs={12}
        md={12}
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Paper style={{ width: "100%" }}>
            <img
              src={photoArr[count]}
              alt="Owner"
              style={{ maxHeight: 500, width: "100%" }}
            ></img>
            <Paper
              style={{
                padding: "2%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Sarah</h2>
              <div>
                <Button
                  endIcon={<ArrowRightAltIcon />}
                  onClick={() => nextPic()}
                >
                  Next Pic
                </Button>
              </div>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={styles.card}>
          <CardContent>
            <h2>Bio</h2>
            <p
              style={{
                lineHeight: lineHeight,
                color: textColor,
                marginTop: afterHeaderMargin,
              }}
            >
              {currentState.selectedMassage.description}
            </p>
          </CardContent>
          <CardContent style={{ marginTop: afterParagraphMargin }}>
            <h2>Qualifications</h2>
            <p
              style={{
                lineHeight: lineHeight,
                color: textColor,
                marginTop: afterHeaderMargin,
              }}
            >
              {currentState.selectedMassage.description}
            </p>
          </CardContent>
          <CardActions>
            <Grid container xs={12} md={8}>
              <Grid item xs={12} md={10}>
                <Paper
                  elevation={6}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 10,
                  }}
                >
                  <Button endIcon={<ArrowRightAltIcon />}>Follow Me</Button>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <TwitterIcon size="large" />
                    <InstagramIcon />
                    <FacebookIcon />
                    <PinterestIcon />
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </CardActions>
        </Paper>
      </Grid>
    </Grid>
  );
};

export const NewBoss = () => {
  return (
    <Grid
      container
      style={styles.newBossContainer}
      justify="space-evenly"
      alignItems="center"
    >
      <Grid
        item
        container
        xs={12}
        lg={5}
        style={{ position: "relative", height: 500 }}
      >
        <img
          src={person19}
          alt="Boss"
          style={{ width: "100%", height: "100%" }}
        />
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(20,10,10,.4)",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </Grid>
      <Grid item container xs={12} spacing={2} lg={6}>
        <Grid item xs={12}>
          <Paper style={{ ...styles.linearBio, padding: 16 }}>
            <h2 style={{ textAlign: "center" }}>About me</h2>
            <div style={{ padding: 24 }}>
              <p>
                Being born and raised in a small town near Zurich, Switzerland
                taught me the importance of being in touch with nature, as well
                as a balanced approach between finding privacy and caring for
                people around me. Last but not least, it has shown me how to
                lead a harmonious life, knowing that one person CAN make a
                difference.
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ ...styles.linearQual, padding: 16 }}>
            <h2 style={{ textAlign: "center" }}>Qualifications</h2>
            <List style={{ padding: 16 }}>
              {qualifications.map((qualification) => {
                return (
                  <ListItem>
                    <ListItemText primary={qualification} />
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper style={{ padding: 16, ...styles.linear }}>
            <h2 style={{ textAlign: "center" }}>Why I Love Massage</h2>
            <div style={{ padding: 24 }}>
              <p style={{}}>
                As a team and each therapist individually we take full
                responsibility for whatever is going on in your body and by
                giving the best hands on massage with all the medical knowledge
                and aspects of it or simply a relaxing Swedish massage we send
                unconditional love to the problem that you share with us and
                clean the replayed memories that interfere with our ability to
                connect to a place of zero and release all replayed memories
                from our minds.
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = {
  card: {
    marginTop: 30,
    marginBottom: 50,
    //   backgroundColor:'rgba(100,100,100,1)',
    borderRadius: 10,
    width: "100%",
    minHeight: 370,
    //   border: '1px solid rgba(180,0,0,.2)'
  },
  picGrid: {
    // backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)"
    backgroundColor: "red",
    //   width:'200%'
  },
  linear: {
    //     backgroundImage: 'linear-gradient(315deg,  rgba(100,100,100,.7) 0%,  #d3d3d3 74%)',
  },
  linearBio: {},
  linearQual: {
    //    backgroundImage: 'linear-gradient(315deg,  rgba(100,100,100,.7) 0%,  #d3d3d3 74%)',
  },
  newBossContainer: {
    marginTop: "3%",
    backgroundColor: "rgba(20,20,20,.1)",
    minHeight: 700,
    width: "100%",
    padding: 15,
  },
};
export default Boss;
