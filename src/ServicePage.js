import React, { useContext, useState, useEffect } from "react";
import "./App.css";

import AppContext from "./context/appContext";
import massage4 from "./Photos/massage4.jpg";
import { Grid, Button, Avatar, Paper, Divider } from "@material-ui/core";
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
import myFunctions from "./MyFunctions2";
const { isEqualTo, isGreaterThan } = myFunctions;

const ServicePage = () => {
  useEffect(() => {
    setModalVisible(false);
  }, []);
  const appContext = useContext(AppContext);
  const {
    lineHeight,
    currentState,
    afterHeaderMargin,
    setModalVisible,
    dispatch,
    smallScreen,
  } = appContext;
  const { massages } = currentState;
  const [hover, setHover] = useState(null);

  return (
    <Grid container style={{ marginBottom: 24 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          marginTop: 60,
        }}
      >
        <div>
          {" "}
          <h1
            style={{
              fontSize: 60,
              textAlign: isGreaterThan(smallScreen, window.innerWidth)
                ? "left"
                : "center",
            }}
          >
            Services
          </h1>
        </div>
        <div
          style={{
            marginBottom: 30,
            marginTop: afterHeaderMargin,
            marginLeft: 40,
          }}
        >
          {massages.map((massage, index) => {
            const { title, description } = massage;
            return (
              <Card
                style={{
                  ...styles.card,
                  ...{
                    transform: hover === index ? "scale(1.04)" : "scale(.95)",
                  },
                  ...{
                    backgroundColor:
                      hover === index
                        ? "rgba(100,100,100,.7)"
                        : "rgba(220,220,220,1)",
                  },
                }}
                raised
                onMouseOver={() => setHover(index)}
                onMouseOut={() => setHover(null)}
              >
                <CardHeader
                  avatar={
                    <Avatar style={{ borderRadius: 50 }}>
                      {title.charAt(0)}
                    </Avatar>
                  }
                  title={<h2>{title}</h2>}
                />
                <CardContent>
                  <p style={{ lineHeight: lineHeight }}>{description}</p>
                </CardContent>
                <CardActions>
                  <Link to="/massage">
                    <Button
                      onClick={() =>
                        dispatch({
                          type: "Select Massage",
                          payload: title,
                        })
                      }
                    >
                      See More
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    // style={{backgroundColor:'rgba(90,0,0,.7)'}}
                    color="primary"
                  >
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
      <NewServicePage />
    </Grid>
  );
};

const NewServicePage = () => {
  const appContext = useContext(AppContext);
  const [hover, setHover] = useState(null);

  const {
    lineHeight,
    currentState,
    afterHeaderMargin,
    setModalVisible,
    dispatch,
    smallScreen,
  } = appContext;

  return (
    <Grid
      item
      container
      direction="row"
      className="massages"
      style={{
        pading: 16,
        width: "100%",
        border: smallScreen ? null : ".5px solid black",
      }}
      onMouseOver={() => setHover(1)}
      onMouseOut={() => setHover(null)}
    >
      <Grid item container style={{ position: "relative" }} lg={2}>
        <Paper
          elevation={5}
          style={{
            width: smallScreen ? "100% " : 200,
            height: smallScreen ? 400 : "100%",
          }}
        >
          <img
            src={massage4}
            alt="back massage"
            style={{
              width: smallScreen ? "100% " : 200,
              height: smallScreen ? 400 : "100%",
              backgroundColor: "rgba(0,0,0,.4)",
            }}
          />
        </Paper>
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(20,10,10,.4)",
            width: smallScreen ? "100% " : 200,
            height: smallScreen ? 400 : "100%",
          }}
        >
          <h2 style={{ textAlign: "center", color: "white", fontSize: 34 }}>
            Swedish
          </h2>
        </div>
      </Grid>
      <Grid item container lg={2}>
        <Paper
          style={{
            width: smallScreen ? "100%" : 200,
            height: "100%",
            padding: 16,
          }}
        >
          <h2 style={{ textAlign: "center" }}>Prices</h2>
          <div
            style={{
              marginTop: 24,
              lineHeight: lineHeight,
              display: "flex",
              flexDirection: "column",
              alignItems: smallScreen ? "center" : null,
            }}
          >
            <p>30min - $60</p>
            <p>60min - $90</p>
            <p>90min - $120</p>
            <p>120min - $150</p>
          </div>
        </Paper>
      </Grid>
      <Grid item container lg={2}>
        <Paper
          style={{
            width: smallScreen ? "100%" : 200,
            height: "100%",
            padding: 16,
            alignItems: smallScreen ? "center" : null,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Benefits</h2>
          <p
            style={{
              marginTop: 24,
              lineHeight: lineHeight,
              textAlign: smallScreen ? "center" : null,
            }}
          >
            1. Muscle Relaxation <br></br>2. Injury Prevention <br></br>3. Heals
            Joint Pain <br></br>4. Improved Blood Circulation
          </p>
        </Paper>
      </Grid>
      <Grid item container lg={4}>
        <Paper style={{ padding: 16 }}>
          <h2 style={{ textAlign: "center" }}>Technique</h2>
          <p style={{ marginTop: 24, lineHeight: lineHeight }}>
            Effleurage consists of long sweeping strokes around the massage
            area', 'Petrissage is the technique that involves kneading the
            muscles', 'Tapotement technique uses the side of your hands to
            loosen the muscles in a fast tapping motion
          </p>
        </Paper>
      </Grid>
      <Grid
        item
        container
        lg={2}
        alignItems="center"
        justify="center"
        style={{ marginBottom: 24, marginTop: 24 }}
      >
        <Button
          variant="contained"
          // style={{backgroundColor:'rgba(90,0,0,.7)'}}
          color="primary"
          style={{
            width: smallScreen ? 170 : "70%",
            height: smallScreen ? 65 : "50%",
          }}
        >
          Book Now
        </Button>
      </Grid>
    </Grid>
  );
};

const styles = {
  ctaBtn: {
    backgroundColor: "rgba(90,0,0,.7)",
    color: "white",
    marginTop: 50,
    width: "50%",
  },
  descripGridStyle: {
    //  backgroundColor:'red',
    flex: 1,
  },
  card: {
    marginTop: 30,
    marginBottom: 40,
    backgroundColor: "rgba(220,220,220,1)",
    //    boxShadow:' rgb(255, 255, 255) 5px 5px 5px 0px, rgb(0, 0, 0) 4px 4px 15px 0px inset, 5px 5px 17px 11px rgba(0,0,0,0)',
    borderRadius: 10,
    width: "90%",
    minHeight: 100,
    //    border: '1px solid rgba(180,0,0,.2)',
  },
  input: {
    //   border:'none',
    width: "40%",
  },
};

export default ServicePage;
