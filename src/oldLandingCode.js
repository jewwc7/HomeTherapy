import React, { useContext, useState } from "react";
import AppContext from "./context/appContext";
import { NewBoss } from "./Boss";
import { SwitchTransition, CSSTransition } from "react-transition-group";

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
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardActionArea,
  CardMedia,
  useMediaQuery,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import person19 from "./Photos/person19.jpg";
import massage4 from "./Photos/massage4.jpg";
import massage1 from "./Photos/massage1.jpg";
import massage2 from "./Photos/massage2.jpg";
import hero from "./Photos/hero.jpg";
import purposeImg from "./Photos/purposeImg.jpg";
import missionImg1 from "./Photos/missionImg1.jpg";
import massageGun from "./Photos/massageGun.jpg";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import myFunctions from "./MyFunctions2";
import { useHistory } from "react-router-dom";
const { isEqualTo, isGreaterThan } = myFunctions;

const chipColor = "white";
const cardHeaderColor = "rgba(10,0,0,1)";

const LandingPage = (props) => {
  const classes = useStyles();
  const appContext = useContext(AppContext);
  const { lineHeight, afterHeaderMargin, smallScreen } = appContext;
  const history = useHistory();
  return (
    <div style={{}}>
      <Grid
        container
        direction="row"
        justify="space-between"
        style={{
          color: "white",
          padding: 15,
          backgroundColor: "rgba(20,20,20,.1)",
        }}
      >
        <Slide
          in
          mountOnEnter
          direction="up"
          timeout={{ appear: 300, enter: 600 }}
        >
          <Grid item direction="column" xs={12} md={6} style={{}}>
            <Paper style={{ maxHeight: 500 }}>
              <img
                {...props}
                src={massage2}
                alt="Owner"
                style={{ height: "100%", width: "100%" }}
              />
            </Paper>
          </Grid>
        </Slide>
        <Grid
          item
          container
          direction="column"
          style={styles.descripGridStyle}
          xs={12}
          md={6}
        >
          <Fade in timeout={{ appear: 900, enter: 1200 }}>
            <Grid
              item
              container
              style={{ flexDirection: "column", alignItems: "center" }}
            >
              <Grid item container direction="column" alignItems="center">
                <h1
                  style={{
                    paddingTop: smallScreen ? 30 : 0,
                  }}
                >
                  Mobile Therapist
                </h1>
                <p
                  style={{
                    width: 320,
                    marginTop: afterHeaderMargin,
                    lineHeight: lineHeight,
                  }}
                >
                  Want a break from the daily grind? CityTouch Licensed Massage
                  Therapy’s broad range of massage therapies offers
                  result-driven massage to improve your health. Our massage
                  therapists are licensed and insured by New York State and are
                  regularly measured on high standards of quality
                  assurance—ensuring a safe, positive, and beneficial experience
                  for our clients.
                </p>
              </Grid>
              <Grid
                item
                container
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={styles.ctaBtn}
                  size="large"
                  color="primary"
                  variant="contained"
                >
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </Fade>
        </Grid>
      </Grid>
      <Massages />
      <NewBoss />
      <Reviews />
      <ContactForm />
      <SocialMedia />
      <Grid container item style={{ height: 650 }}>
        <Hero />
      </Grid>
      <Grid container item style={{ backgroundColor: "#E3E3E3" }}>
        <Purpose />
      </Grid>
      <Grid container item style={{}}>
        <Mission />
      </Grid>
    </div>
  );
};

const Hero = () => {
  const classes = useStyles();
  const appContext = useContext(AppContext);
  const { lineHeight, afterHeaderMargin, smallScreen } = appContext;
  const history = useHistory();
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "100%",
        width: "100%",
        position: "relative",
      }}
      //justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        container
        xs={12}
        md={6}
        justifyContent="center"
        alignItems="center"
        //fix this need to move to middle// style={{ backgroundColor: "red" }}
      >
        <Grid item style={{}}>
          <h1
            style={{
              color: "white",
              fontSize: 48,
              lineHeight: 1.2,
            }}
          >
            Mobile Massage <br></br>Therapist
          </h1>
          <p
            style={{
              color: "white",
              marginTop: 24,
            }}
          >
            A better mind, body and spirit - One day at a time
          </p>
          <Paper
            style={{
              backgroundColor: "#BD0027",
              padding: 16,
              height: 50,
              width: 140,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginTop: 40,
              borderRadius: 40,
            }}
            elevation={6}
            // onClick={() => setQuoteModalVisible(true)}
          >
            <p className="cta-text">Book Now</p>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Purpose = () => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{ backgroundColor: "yellow" }}
      justifyContent="space-evenly"
    >
      <Grid item container xs={12} md={5} style={{ backgroundColor: "red" }}>
        <Grid item style={{}}>
          <h1
            style={{
              color: "#151515",
              fontSize: 48,
              lineHeight: 1.2,
            }}
          >
            Our Purpose
          </h1>
          <p
            style={{
              color: "#151515",
              marginTop: 24,
            }}
          >
            The "Home" is a physical and mental space not just where you reside
            physically, but mentally as well. In these spaces - one looks for
            peace, love, serenity and security. A secure place to be open and
            received. With H.O.M.E Therapy you will be treated with the utmost
            respect and attention.
          </p>
        </Grid>
      </Grid>
      <Grid item container xs={12} md={5} style={{ backgroundColor: "red" }}>
        <img
          src={purposeImg}
          // className="dualpics"
          alt="massage"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

const Mission = () => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{ backgroundColor: "yellow" }}
      justifyContent="space-evenly"
    >
      <Grid item container xs={12} md={5} style={{ backgroundColor: "red" }}>
        <img
          src={missionImg1}
          // className="dualpics"
          alt="massage"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item container xs={12} md={5} style={{ backgroundColor: "red" }}>
        <Grid item style={{}}>
          <h1
            style={{
              color: "#151515",
              fontSize: 48,
              lineHeight: 1.2,
            }}
          >
            Our Mission
          </h1>
          <p
            style={{
              color: "#151515",
              marginTop: 24,
            }}
          >
            The "Home" is a physical and mental space not just where you reside
            physically, but mentally as well. In these spaces - one looks for
            peace, love, serenity and security. A secure place to be open and
            received. With H.O.M.E Therapy you will be treated with the utmost
            respect and attention.
          </p>
          <Paper
            style={{
              backgroundColor: "#BD0027",
              padding: 16,
              height: 50,
              width: 140,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginTop: 40,
              borderRadius: 40,
            }}
            elevation={6}
            // onClick={() => setQuoteModalVisible(true)}
          >
            <p className="cta-text">Book Now</p>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Massages = () => {
  const classes = useStyles();

  const appContext = useContext(AppContext);
  const {
    lineHeight,
    afterHeaderMargin,
    mainSectionMargin,
    smallScreen,
    textColor,
    thirdColor,
    dispatch,
    currentState,
    clickableChip,
    massageTypes,
  } = appContext;
  const {
    swedish,
    deepTissue,
    sports,
    thai,
    thirty,
    sixty,
    ninety,
    oneTwenty,
  } = massageTypes;

  const [massageCard, setMassageCard] = useState({
    massageSelected: sports,
    timeSelected: null,
  });

  const history = useHistory();
  function setCardandMassage(massage) {
    setMassageCard((prev) => {
      return {
        ...prev,
        massageSelected: massage,
      };
    });
    dispatch({ type: "Select Massage", payload: massage });
  }
  //change the selectedMassage in currentState then go to the singleMassagepage
  function goSingleMassagePage(massage, link) {
    dispatch({
      type: "Select Massage",
      payload: massage,
    });
    history.push(link);
  }

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      style={{ padding: 15, marginTop: mainSectionMargin, ...styles.linear }}
    >
      <Grid
        item
        container
        xs={12}
        md={6}
        style={{
          position: "relative",
          height: smallScreen ? 400 : 500,
          //  marginTop: smallScreen ? 40 : 40,
        }}
      >
        <Paper
          elevation={5}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={massage4}
            alt="back massage"
            style={{
              width: "100%",
              height: "100%",
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
            width: "100%",
            height: smallScreen ? "100%" : 500,
          }}
        >
          <h2 style={{ textAlign: "center", color: "white", fontSize: 54 }}>
            Massages
          </h2>
          <ArrowRightAltIcon style={{ color: "white", fontSize: 30 }} />
        </div>
      </Grid>
      <Grid
        container
        item
        direction="column"
        xs={12}
        md={5}
        style={{ justifyContent: "center", marginTop: smallScreen ? 32 : 0 }}
      >
        <Grid container item spacing={2}>
          <Grid item xs={12}>
            <Chip
              label="Swedish"
              avatar={
                <Avatar
                  style={{
                    backgroundColor: isEqualTo(
                      swedish,
                      massageCard.massageSelected
                    )
                      ? thirdColor
                      : "",
                  }}
                >
                  S
                </Avatar>
              }
              style={{
                fontSize: 18,
                backgroundColor: chipColor,
              }}
              variant="outlined"
              onClick={() => setCardandMassage(swedish)}
            />
          </Grid>
          <Grid item xs={12}>
            <Chip
              label="Sports"
              avatar={
                <Avatar
                  style={{
                    backgroundColor: isEqualTo(
                      sports,
                      massageCard.massageSelected
                    )
                      ? thirdColor
                      : "",
                  }}
                >
                  S
                </Avatar>
              }
              style={{
                fontSize: 18,
                backgroundColor: chipColor,
              }}
              variant="outlined"
              onClick={() => setCardandMassage(sports)}
            />
          </Grid>
          <Grid item xs={12} style={{}}>
            <Chip
              label="Deep Tissue"
              avatar={
                <Avatar
                  style={{
                    backgroundColor: isEqualTo(
                      deepTissue,
                      massageCard.massageSelected
                    )
                      ? thirdColor
                      : "",
                  }}
                >
                  D
                </Avatar>
              }
              style={{
                fontSize: 18,
                backgroundColor: chipColor,
              }}
              variant="outlined"
              onClick={() => setCardandMassage(deepTissue)}
            />
          </Grid>
        </Grid>
        <Card style={styles.card}>
          <CardHeader
            avatar={<Avatar style={{}}>K</Avatar>}
            title={
              <h2 style={{ color: cardHeaderColor }}>
                {currentState.selectedMassage.title}
              </h2>
            }
            style={{}}
          />
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <Chip
              label="30min"
              variant="outlined"
              disabled={
                currentState.selectedMassage.prices[0].hasOwnProperty(30)
                  ? false
                  : true
              }
              clickable={
                currentState.selectedMassage.prices[0].hasOwnProperty(30)
                  ? true
                  : false
              }
              style={{
                backgroundColor:
                  currentState.selectedMassage.prices[0].hasOwnProperty(30)
                    ? clickableChip
                    : null,
              }}
            />
            <Chip
              label="60min"
              disabled={
                currentState.selectedMassage.prices[0].hasOwnProperty(60)
                  ? false
                  : true
              }
              variant="outlined"
              clickable={
                currentState.selectedMassage.prices[0].hasOwnProperty(60)
                  ? true
                  : false
              }
              style={{
                backgroundColor:
                  currentState.selectedMassage.prices[0].hasOwnProperty(60)
                    ? clickableChip
                    : null,
              }}
            />
            <Chip
              label="90min"
              variant="outlined"
              disabled={
                currentState.selectedMassage.prices[0].hasOwnProperty(90)
                  ? false
                  : true
              }
              clickable={
                currentState.selectedMassage.prices[0].hasOwnProperty(90)
                  ? true
                  : false
              }
              style={{
                backgroundColor:
                  currentState.selectedMassage.prices[0].hasOwnProperty(90)
                    ? clickableChip
                    : null,
              }}
            />
            <Chip
              label="120min"
              variant="outlined"
              disabled={
                currentState.selectedMassage.prices[0].hasOwnProperty(120)
                  ? false
                  : true
              }
              clickable={
                currentState.selectedMassage.prices[0].hasOwnProperty(120)
                  ? true
                  : false
              }
              style={{
                backgroundColor:
                  currentState.selectedMassage.prices[0].hasOwnProperty(120)
                    ? clickableChip
                    : null,
              }}
            />
          </CardContent>
          <SwitchTransition mode="out-in">
            <CSSTransition
              classNames="alert"
              key={currentState.selectedMassage.description}
              //this is needed if timeout not provided. If timeout provided I beleive it will run the timeouts instead of the css
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
            >
              <CardContent style={{ lineHeight: lineHeight, color: textColor }}>
                {currentState.selectedMassage.description}
              </CardContent>
            </CSSTransition>
          </SwitchTransition>
          <CardActions>
            <Button
              onClick={() =>
                goSingleMassagePage(
                  currentState.selectedMassage.title,
                  "/massage"
                )
              }
              endIcon={<ArrowRightAltIcon />}
              classes={{
                label: classes.label, // Pass your override css here
              }}
            >
              See More
            </Button>
            <Button
              variant="contained"
              // style={{backgroundColor:'rgba(90,0,0,.7)'}}
              color="primary"
            >
              Book Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        style={{
          position: "relative",
          marginTop: smallScreen ? 48 : 48,
          height: smallScreen ? 500 : 650,
        }}
      >
        <Paper
          elevation={5}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={massage1}
            alt="back massage"
            style={{
              width: "100%",
              height: "100%",
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
            width: "100%",
            height: "100%",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "white",
              fontSize: smallScreen ? 36 : 54,
            }}
          >
            Enhancements
          </h2>
          <ArrowRightAltIcon style={{ color: "white", fontSize: 30 }} />
        </div>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={5}
        direction="column"
        style={{
          paddingTop: smallScreen ? 32 : 40,
        }}
      >
        <Grid
          container
          item
          spacing={2}
          style={{ marginTop: smallScreen ? 0 : 0 }}
        >
          <Grid item xs={12}>
            <Chip
              label="Muscle Gun Therapy"
              avatar={
                <Avatar
                  style={{
                    backgroundColor: isEqualTo(thirty, massageCard.timeSelected)
                      ? thirdColor
                      : "",
                  }}
                >
                  S
                </Avatar>
              }
              // color={selected ? 'secondary': ''}
              style={{
                fontSize: 18,
                backgroundColor: chipColor,
              }}
              variant="outlined"
              onClick={() =>
                setMassageCard((prev) => {
                  return {
                    ...prev,
                    timeSelected: thirty,
                  };
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Chip
              label="Aroma Therapy"
              avatar={
                <Avatar
                  style={{
                    backgroundColor: isEqualTo(sixty, massageCard.timeSelected)
                      ? thirdColor
                      : "",
                  }}
                >
                  S
                </Avatar>
              }
              style={{
                fontSize: 18,
                backgroundColor: chipColor,
              }}
              variant="outlined"
              onClick={() =>
                setMassageCard((prev) => {
                  return {
                    ...prev,
                    timeSelected: sixty,
                  };
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Chip
              label="Advanced Muscle Therapy"
              avatar={
                <Avatar
                  style={{
                    backgroundColor: isEqualTo(ninety, massageCard.timeSelected)
                      ? thirdColor
                      : "",
                  }}
                >
                  A
                </Avatar>
              }
              style={{
                fontSize: 18,
                backgroundColor: chipColor,
              }}
              variant="outlined"
              onClick={() =>
                setMassageCard((prev) => {
                  return {
                    ...prev,
                    timeSelected: ninety,
                  };
                })
              }
            />
          </Grid>
        </Grid>

        <Card style={styles.card}>
          <CardHeader
            avatar={<Avatar style={{ borderRadius: 50 }}>M</Avatar>}
            title={<h2 style={{ color: "black" }}>Muscle Gun Therapy</h2>}
            style={{}}
          />
          <CardContent>
            <p>
              Quickly sweep across your upper traps, palms, quads, hamstrings,
              and feet for 15 seconds each to help wake up the body and get
              blood flowing.{" "}
            </p>
          </CardContent>
          <CardActions>
            <Button
              endIcon={<ArrowRightAltIcon />}
              classes={{
                label: classes.label, // Pass your override css here
              }}
            >
              See More
            </Button>
            <Button variant="contained" color="primary">
              Book Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export const ContactForm = () => {
  const history = useHistory();
  const inputLabelColor = "black";
  const appContext = useContext(AppContext);
  const {
    subtTitleText,
    bigPText,
    afterHeaderMargin,
    afterParagraphMargin,
    smallScreen,
    textColor,
    thirdColor,
  } = appContext;
  return (
    <Grid
      container
      spacing={2}
      style={{
        padding: 16,
        marginTop: 40,
        backgroundColor: "rgba(20,20,20,.1)",
        width: "100%",
      }}
    >
      <Grid
        item
        container
        xs={12}
        md={12}
        justify={smallScreen ? null : "center"}
        style={{ marginBottom: 40 }}
      >
        <Paper
          style={{
            width: smallScreen ? "100%" : "50%",
            padding: 16,
            border: `2px solid rgba(65,0,0,.9)`,
            //  backgroundColor: "rgba(65,0,0,.7)",
          }}
        >
          <Grid item xs={12}>
            <h2
              style={{ textAlign: "center", marginBottom: 24, color: "black" }}
            >
              Contact Me
            </h2>
          </Grid>
          <Grid item container spacing={3}>
            <Grid item xs={6} md={5}>
              <TextField
                label="First Name"
                variant="filled"
                InputLabelProps={{
                  style: {
                    color: inputLabelColor,
                  },
                }}
                style={{ ...styles.input }}
              ></TextField>
            </Grid>
            <Grid item xs={6} md={5}>
              <TextField
                variant="filled"
                label="Last Name"
                InputLabelProps={{
                  style: {
                    color: inputLabelColor,
                  },
                }}
                style={{ ...styles.input }}
              ></TextField>
            </Grid>
          </Grid>
          <Grid item container spacing={3}>
            <Grid item xs={12} md={5}>
              <TextField
                variant="filled"
                label="Email"
                InputLabelProps={{
                  style: {
                    color: inputLabelColor,
                  },
                }}
                style={{ ...styles.input }}
              ></TextField>
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                label="Age"
                variant="filled"
                select
                size="medium"
                InputLabelProps={{
                  style: {
                    color: inputLabelColor,
                  },
                }}
                style={{ ...styles.input }}
              >
                <MenuItem value={10} onClick={(e) => console.log(e.target)}>
                  18-30
                </MenuItem>
                <MenuItem value={20}>31-49</MenuItem>
                <MenuItem value={30}>50 or Older</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                label="Gender"
                variant="filled"
                select
                size="medium"
                InputLabelProps={{
                  style: {
                    color: inputLabelColor,
                  },
                }}
                style={{ ...styles.input }}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Non Binary</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              variant="outlined"
              placeholder="Write something.."
              InputLabelProps={{
                style: {
                  color: inputLabelColor,
                },
              }}
              style={{ width: "80%" }}
            ></TextField>
          </Grid>
          <Grid item xs={6} style={{ marginTop: 24 }}>
            <Button color="primary" variant="contained">
              Submit
            </Button>
          </Grid>
        </Paper>
      </Grid>

      <Grid
        item
        container
        xs={12}
        md={12}
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Paper style={{ padding: 16, minHeight: 300 }}>
          <Grid item container direction="column">
            <h2 style={{ textAlign: "center" }}>Travel Radius</h2>
            <p style={{ fontSize: 18, color: textColor, marginTop: 24 }}>
              *Bookings less than 60 minutes must be within 10 mile Radius of
              the Kansas City Zoo
            </p>
            <p style={{ fontSize: 14, alignSelf: "center" }}>
              6800 Zoo Dr<br></br> Kansas City, MO 64132{" "}
            </p>
            <Paper
              style={{ height: 200, marginTop: afterHeaderMargin }}
            ></Paper>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

const SocialMedia = () => {
  const appContext = useContext(AppContext);
  const { lineHeight, afterHeaderMargin, smallScreen } = appContext;
  return (
    <Grid
      item
      container
      alignItems="center"
      //justify={smallScreen ? "center" : "flex-end"}
      justify="space-between"
      style={{ padding: 16, marginTop: smallScreen ? 0 : 16 }}
    >
      <Grid item container xs={4} alignItems="center">
        <h3>Follow me</h3>
        <FacebookIcon style={{ fontSize: 24 }} />
        <InstagramIcon style={{ fontSize: 24 }} />
      </Grid>
      <Grid item container xs={4} justify="flex-end">
        <p>
          <strong>Design By JayWheel</strong>
        </p>
      </Grid>
    </Grid>
  );
};

const Reviews = () => {
  const reviewsArr = [
    {
      name: "Mikey",
      review:
        " I stayed in town for a few days, looking for the best massage in       Kansas City, I definitely found it! Not from the area I am a bit   nervous, but everything is great! I am a hair stylist, with a      lot of physical pain and pain, they are beyond my expectations,    and getting rid of those still makes it a relaxing experience!",
    },
    {
      name: "James",
      review:
        "I stayed in town for a few days, looking for the best massage in Kansas City, I definitely found it! Not from the area I am a bit  nervous, but everything is great!",
    },
    {
      name: "Jenny",
      review:
        " I stayed in town for a few days,        Kansas City, I definitely found it! Not from the area I am a bit   nervous, but everything is great! I am a hair stylist, with a      lot of physical pain and pain, they are beyond my expectations,    and getting rid of those still makes it a relaxing experience!",
    },
    {
      name: "Jessica",
      review:
        "I definitely found it! Not from the area I am a bit   nervous, but everything is great! I am a hair stylist, with a      lot of physical pain and pain, they are beyond my expectations,    and getting rid of those still makes it a relaxing experience!",
    },
  ];
  const classes = useStyles();
  const [reviews, setReviews] = useState(reviewsArr);
  const [reviewNum, setReviewNum] = useState(0);
  function randomNum() {
    if (reviewNum + 1 === reviews.length) {
      setReviewNum(0);
      return;
    }
    setReviewNum(reviewNum + 1);
  }

  return (
    <Grid
      container
      style={{
        ...styles.linearReview,
        height: 350,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3%",
      }}
    >
      <Grid item xs={10} md={6}>
        <Card style={{ minHeight: 200 }} raised>
          <CardHeader
            avatar={
              <Avatar style={{ borderRadius: 50, border: "1px solid #003E3A" }}>
                <TwitterIcon />
              </Avatar>
            }
            title={
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ color: "black" }}>{reviews[reviewNum].name}</h3>
                <div>
                  <Button
                    endIcon={<ArrowRightAltIcon />}
                    style={{ fontSize: 8 }}
                    onClick={randomNum}
                    classes={{
                      label: classes.label, // Pass your override css here
                    }}
                  >
                    Next review {reviewNum + 1} / {reviewsArr.length}
                  </Button>
                </div>
              </div>
            }
          />
          <SwitchTransition mode="out-in">
            <CSSTransition
              classNames="review"
              key={reviews[reviewNum].review}
              //this is needed if timeout not provided. If timeout provided I beleive it will run the timeouts instead of the css
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
            >
              <CardContent>{reviews[reviewNum].review}</CardContent>
            </CSSTransition>
          </SwitchTransition>
        </Card>
      </Grid>
    </Grid>
  );
};

const styles = {
  ctaBtn: {
    // backgroundColor:'rgba(90,0,0,.7)',
    //   backgroundColor:'rgba(0, 62, 58, 1)',
    //    color:'white',
    marginTop: 50,
    width: "40%",
  },
  descripGridStyle: {
    //  backgroundColor:'red',
    flex: 1,
  },
  card: {
    marginTop: 30,
    backgroundColor: "rgba(250,250,250,1)",
    //   backgroundColor: '#3f0d12',
    //  backgroundImage: 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)',
    borderRadius: 10,
    width: "90%",
    maxHeight: "90%",
  },
  input: {
    //   border:'none',
    width: "100%",
    marginBottom: 24,
  },
  listItemStyle: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 24,
  },
  linear: {
    backgroundColor: "rgba(65,0,0,.9)",
    // backgroundImage: 'linear-gradient(315deg, #d3d3d3 0%, rgba(90,0,0,.7) 74%)',
  },
  linearReview: {
    //  backgroundColor:'rgba(255,255,255,1)',
    //  backgroundImage: 'linear-gradient(3150deg,  rgba(50,50,50,.7) 0%,  rgba(66,0,0,.7) 74%)',
    backgroundColor: "rgba(65,0,0,.9)",
  },
};

const useStyles = makeStyles({
  btn: {
    color: "#003E3A",
  },
  label: {
    color: "rgba(0,0,0,1)",
  },
});

export default LandingPage;
