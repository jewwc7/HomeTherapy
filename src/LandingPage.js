import React, { useContext, useState } from "react";
import AppContext from "./context/appContext";
import CustomChip from "./CustomChip";
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

import massage4 from "./Photos/massage4.jpg";
import massage1 from "./Photos/massage1.jpg";

import hero from "./Photos/hero.jpg";
import purposeImg from "./Photos/purposeImg.jpg";
import missionImg1 from "./Photos/missionImg1.jpg";
import bioImg from "./Photos/bioImg.svg";
import calendar from "./Photos/calendar.jpg";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import myFunctions from "./MyFunctions2";
import { useHistory } from "react-router-dom";
const { isEqualTo, isGreaterThan } = myFunctions;

const chipColor = "white";
const cardHeaderColor = "rgba(10,0,0,1)";
const horizonalPadding = 24;
const paperRadius = 20;

const LandingPage = (props) => {
  const classes = useStyles();
  const appContext = useContext(AppContext);
  const {
    lineHeight,
    afterHeaderMargin,
    smallScreen,
    mediumScreen,
    LargeScreen,
  } = appContext;
  const history = useHistory();
  return (
    <Grid item container style={{}}>
      <Grid container item style={{ height: 620 }}>
        <Hero />
      </Grid>
      <Grid
        container
        item
        style={{ backgroundColor: "#E3E3E3", height: mediumScreen ? 400 : 800 }}
      >
        <Purpose />
      </Grid>
      <Grid container item style={{ height: mediumScreen ? 420 : "100%" }}>
        <Mission />
      </Grid>
      <Grid
        container
        item
        style={{
          backgroundColor: "#E3E3E3",
          height: mediumScreen ? 500 : 640,
          marginTop: mediumScreen ? null : 24,
        }}
      >
        <Services />
      </Grid>
      <Grid container item style={{ height: mediumScreen ? 400 : "100%" }}>
        <Bio />
      </Grid>
      <Grid container item style={{}}>
        <Reviews />
      </Grid>
      <Grid
        container
        item
        style={{ marginTop: 24, height: mediumScreen ? "100%" : "100%" }}
      >
        <Appointment />
      </Grid>
      <Grid
        container
        item
        style={{
          backgroundColor: "#541919",
          height: "100%",
          marginTop: mediumScreen ? 24 : 160,
        }}
      >
        <Footer />
      </Grid>
    </Grid>
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
        backgroundSize: "cover", //100% looks good on desktop, make tenary if want to change
        height: "100%",
        width: "100%",
        position: "relative",
      }}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        container
        xs={12}
        //   md={6}
        justify="center"
        alignItems="center"
      >
        <Grid
          xs={10}
          item
          container
          direction="column"
          alignItems="center"
          style={{}}
        >
          <h1
            style={{
              color: "white",
              fontSize: 48,
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Mobile Massage Therapist
          </h1>
          <p
            style={{
              color: "white",
              marginTop: 24,
              textAlign: "center",
            }}
          >
            A better mind, body and spirit - One day at a time
          </p>
          <Paper
            style={{
              backgroundColor: "#541919",
              padding: 16,
              height: 70,
              width: 160,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginTop: 40,
              borderRadius: 40,
              alignSelf: "center",
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
  const appContext = useContext(AppContext);
  const {
    lineHeight,
    afterHeaderMargin,
    smallScreen,
    mediumScreen,
    largeScreen,
  } = appContext;
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingLeft: horizonalPadding,
        paddingRight: horizonalPadding,
        marginTop: 24,
      }}
      justify={mediumScreen ? "space-between" : null}
    >
      <Grid item container xs={12} md={5} style={{}}>
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
      <Grid item xs={12} md={5} style={{}}>
        <img
          src={purposeImg}
          // className="dualpics"
          alt="massage"
          style={{ width: "100%", height: "85%" }}
        />
      </Grid>
    </Grid>
  );
};

const Mission = () => {
  const appContext = useContext(AppContext);
  const {
    lineHeight,
    afterHeaderMargin,
    smallScreen,
    mediumScreen,
    largeScreen,
  } = appContext;

  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingLeft: horizonalPadding,
        paddingRight: horizonalPadding,
        height: "100%",
        marginTop: 24,
      }}
      justify="space-between"
    >
      <Grid item container xs={12} md={5} style={{ height: "100%" }}>
        <img
          src={missionImg1}
          // className="dualpics"
          alt="massage"
          style={{ width: "100%", height: "85%" }}
        />
      </Grid>
      <Grid item container xs={12} md={5}>
        <Grid item style={{ marginTop: mediumScreen ? null : 24 }}>
          <h1
            style={{
              color: "#151515",
              fontSize: 48,
              lineHeight: 1.2,
              textAlign: mediumScreen ? null : "center",
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
              backgroundColor: "#541919",
              padding: 16,
              height: 50,
              width: 180,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginTop: 40,
              borderRadius: 50,
              alignSelf: mediumScreen ? null : "center",
            }}
            elevation={6}
            // onClick={() => setQuoteModalVisible(true)}
          >
            <p className="cta-text">See Massages</p>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Services = () => {
  const appContext = useContext(AppContext);
  const {
    lineHeight,
    afterHeaderMargin,
    smallScreen,
    mediumScreen,
    largeScreen,
  } = appContext;
  const massageChips = [
    {
      title: "Swedish",
    },
    {
      title: "Sports",
    },
    {
      title: "Deep TIssue",
    },
  ];

  const addOnChips = [
    {
      title: "Hot Towel",
    },
    {
      title: "Full Body Stretching",
    },
    {
      title: "Aroma Therapy",
    },
  ];
  function showChips() {
    return massageChips.map((chip, index) => {
      const { title } = chip;
      return (
        <Grid item container xs={12} md={5}>
          <CustomChip title={title} width="80%" />
        </Grid>
      );
    });
  }

  function showAddOns() {
    return addOnChips.map((chip, index) => {
      const { title } = chip;
      return <Chip label={title} disabled />;
    });
  }
  return (
    <Grid
      item
      container
      direction="column"
      xs={12}
      style={{
        paddingLeft: horizonalPadding,
        paddingRight: horizonalPadding,
        height: "100%",
        marginTop: 24,
      }}
    >
      <h1
        style={{
          color: "black",
          fontSize: 48,
          lineHeight: 1.2,
          textAlign: mediumScreen ? null : "center",
        }}
      >
        Services
      </h1>
      <Grid item xs={10} md={8} style={{ marginTop: 24 }} justify="center">
        <Grid item>
          <Paper
            elevation={0}
            style={{
              width: "100%",

              maxHeight: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 24,
              border: "1px solid black",
              borderRadius: paperRadius,
            }}
          >
            <Grid item container>
              <h2>Massages</h2>
              <Grid item container style={{ marginTop: 16 }} spacing={3}>
                {showChips()}
              </Grid>
            </Grid>
            <Grid item container style={{ marginTop: 24 }}>
              <h2>Add-Ons</h2>
              <Grid item container style={{ marginTop: 16 }} spacing={3}>
                {showAddOns()}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Bio = () => {
  const appContext = useContext(AppContext);
  const { smallScreen, mediumScreen, largeScreen } = appContext;
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingLeft: horizonalPadding,
        paddingRight: horizonalPadding,
        height: "100%",
        marginTop: 24,
      }}
      justify="space-between"
    >
      <Grid item container xs={12} md={5} style={{}}>
        <Grid item style={{}}>
          <h1
            style={{
              color: "#151515",
              fontSize: 48,
              lineHeight: 1.2,
            }}
          >
            Meet KeAla "KeKe" Jones
          </h1>
          <h4>Owner, B.S. Exercise Science, LMT</h4>
          <p
            style={{
              color: "#151515",
              marginTop: 24,
            }}
          >
            As a former collegiate athlete and having a love for the human body
            as a whole - KeKe received a Bachelors of Science in Exercise
            Science from the University of Tampa in 2015. In time, realizing and
            fostering her ability to nurture in conjunction with her natural
            passion of helping others - She became a Licensed Massage Therapist
            on December 12th, 2020. She combines the best techniques including
            Swedish and Deep Tissue massage to create a comforting and
            therapeutic treatment that is unique and customized for each
            person's own individual healing experience.
          </p>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={5}
        style={{ height: mediumScreen ? "100%" : 100 }}
      >
        <img
          src={bioImg}
          // className="dualpics"
          alt="massage"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

const Appointment = () => {
  const appContext = useContext(AppContext);
  const {
    lineHeight,
    afterHeaderMargin,
    smallScreen,
    mediumScreen,
    LargeScreen,
  } = appContext;

  return (
    <Grid
      item
      container
      xs={12}
      style={{
        paddingLeft: horizonalPadding,
        paddingRight: horizonalPadding,
        height: "100%",
      }}
    >
      <Grid item container xs={12}>
        <Grid item container>
          <h1
            style={{
              color: "black",
              fontSize: 48,
              lineHeight: 1.2,
            }}
          >
            Book An Appointment
          </h1>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        justify={mediumScreen ? "space-between" : null}
        style={{ marginTop: 16 }}
      >
        <Grid item container xs={12} md={5} style={{}}>
          <Paper
            elvation={0}
            style={{
              width: "100%",
              height: 200,
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              padding: 24,
              border: "1px solid black",
              borderRadius: paperRadius,
            }}
          >
            <p>No same day appointments</p>
            <p>
              30 minutes refreshers not available outside 10 mile radius from
              Kansas City Zoo.
            </p>
          </Paper>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={5}
          style={{ height: mediumScreen ? "100%" : "80%" }}
        >
          <img
            src={calendar}
            // className="dualpics"
            alt="massage"
            style={{
              width: "100%",
              height: "100%",
              marginTop: mediumScreen ? null : 24,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const Footer = () => {
  const appContext = useContext(AppContext);
  const {
    lineHeight,
    afterHeaderMargin,
    smallScreen,
    mediumScreen,
    LargeScreen,
  } = appContext;

  return (
    <Grid
      item
      container
      xs={12}
      style={{
        marginTop: 24,
        paddingLeft: horizonalPadding,
        paddingRight: horizonalPadding,
      }}
    >
      <Grid item container xs={12} md={6} direction="column">
        <h2
          style={{
            color: "white",
          }}
        >
          Have a Question?
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            paddingTop: 16,
          }}
        >
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            style={{ backgroundColor: "white" }}
          />
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            style={{ backgroundColor: "white" }}
          />
          <TextField
            id="filled-basic"
            label="Ask Something..."
            variant="filled"
            multiline={true}
            rows={2}
            style={{ backgroundColor: "white" }}
          />
        </div>
      </Grid>
      <Grid
        xs={12}
        md={6}
        style={{
          marginTop: mediumScreen ? null : 24,
          marginBottom: mediumScreen ? null : 24,
        }}
      >
        <Grid item xs={12} md={7}>
          <Paper
            elevation={6}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 10,
              flexDirection: "column",
              borderRadius: paperRadius,
            }}
          >
            <h3>Follow Me</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                marginLeft: 10,
                marginTop: 16,
              }}
            >
              <div style={{ display: "flex" }}>
                <TwitterIcon />
                <p style={{ marginLeft: 10 }}>@KEKEJones</p>
              </div>
              <div style={{ display: "flex" }}>
                <InstagramIcon />
                <p style={{ marginLeft: 10 }}>@MISSKEKE</p>
              </div>
              <div style={{ display: "flex" }}>
                <FacebookIcon />
                <p style={{ marginLeft: 10 }}>homestudiotherapy@gmail.com</p>
              </div>
            </div>
          </Paper>
        </Grid>
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
        <Card style={{ minHeight: 200, borderRadius: paperRadius }} raised>
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
