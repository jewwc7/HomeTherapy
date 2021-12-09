import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import CustomChip from "./CustomChip";
import AppContext from "./context/appContext";
import massage4 from "./Photos/massage4.jpg";
import {
  Grid,
  Button,
  Avatar,
  Paper,
  Divider,
  Hidden,
  Chip,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import myFunctions from "./MyFunctions2";
const { isEqualTo, isGreaterThan } = myFunctions;
const chipColor = "white";
const horizonalPadding = 24;

const ServicePage = () => {
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
  const {
    selectedMassage: { benefits },
  } = currentState;

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
    {
      title: "30 Minutes Refresher",
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

  const prices = [
    {
      title: "60min/$75",
    },
    {
      title: "90min/$100",
    },
    {
      title: "120min/$140",
    },
  ];

  const cardsDetails = [
    {
      title: "Swedish Massage",
      prices: ["60min/$75", "90min/$100", "120min/$140"],
      purpose: "string",
      benefits: "string",
    },
    {
      title: "Deep Tissue Massage",
      prices: ["60min/$75", "90min/$100", "120min/$140"],
      purpose: "string",
      benefits: "string",
    },
    {
      title: "Sports Massage",
      prices: ["60min/$75", "90min/$100", "120min/$140"],
      purpose: "string",
      benefits: "string",
    },
    {
      title: "30 Minute Refresher",
      prices: ["60min/$75", "90min/$100", "120min/$140"],
      purpose: "string",
      benefits: "string",
    },
  ];
  function showButtons(height = "100%", width = "100%") {
    return massageChips.map((chip, index) => {
      const { title } = chip;
      return (
        <Grid item container xs={12} md={3}>
          <CustomChip title={title} width={width} height={height} />
        </Grid>
      );
    });
  }

  function showChips() {
    return addOnChips.map((chip, index) => {
      const { title } = chip;
      return (
        <Grid item container xs={12} md={5}>
          <CustomChip title={title} width="100%" />
        </Grid>
      );
    });
  }
  function showPrices(height = "100%", width = "100%") {
    return prices.map((chip, index) => {
      const { title } = chip;
      return (
        <Grid item container xs={12} md={6}>
          <CustomChip title={title} width={width} height={height} />
        </Grid>
      );
    });
  }

  function showCards() {
    return cardsDetails.map((card, index) => {
      const { title } = card;
      return (
        <Grid item container xs={12} md={5}>
          <Paper
            elevation={4}
            style={{
              width: "100%",
              maxHeight: "100%",
              //  height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 24,
              //   border: "1px solid black",
              borderRadius: 20,
            }}
          >
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            <Divider style={{ marginTop: 16 }} />
            <Grid item container style={{ marginTop: 16 }} spacing={3}>
              {showPrices(12, "100%")}
            </Grid>
            <Grid item container style={{ marginTop: 24 }} direction="column">
              <h3>Purpose:</h3>
              <p style={{ marginTop: 16 }}>
                Promote relaxation, blood flow and facilitates healing for
                disorders and diseases
              </p>
            </Grid>
            <Grid item container style={{ marginTop: 8 }} direction="column">
              <h3>Benefits:</h3>
              <p style={{ marginTop: 16 }}>
                Pain Management, Increased Blood Flow Reduced Stress, Increased
                Sense of Well Being, Relaxation
              </p>
            </Grid>
            <Grid item container justify="flex-end">
              <Paper
                style={{
                  backgroundColor: "#541919",
                  padding: 16,
                  height: 50,
                  width: 180,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  cursor: "pointer",
                  marginTop: 40,
                  borderRadius: 50,
                }}
                elevation={6}
                // onClick={() => setQuoteModalVisible(true)}
              >
                <p className="cta-text"> Book Now</p>
                <ArrowRightAltIcon />
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      );
    });
  }
  return (
    <Grid container style={{ marginTop: 24 }}>
      <Grid
        item
        container
        xs={12}
        style={{
          paddingLeft: horizonalPadding,
          paddingRight: horizonalPadding,
        }}
      >
        <h1>Massages</h1>

        <Grid
          item
          container
          xs={12}
          style={{ marginTop: 24 }}
          spacing={3}
          justify="center"
          alignItems="center"
        >
          {showCards()}
        </Grid>
        <Grid
          item
          container
          xs={12}
          style={{ marginTop: 24, marginBottom: 24 }}
          justify="center"
        >
          <Grid item xs={12} md={4}>
            <Paper
              elevation={4}
              style={{
                width: "100%",
                maxHeight: "100%",
                //  height: "100%",
                display: "flex",
                flexDirection: "column",
                padding: 24,
                //   border: "1px solid black",
                borderRadius: 20,
              }}
            >
              <h3 style={{ textAlign: "center" }}>Add Ons</h3>
              <Grid item container style={{ marginTop: 16 }} spacing={3}>
                <p style={{ padding: 8 }}>Hot Towel Treatment - $5.00</p>
                <p style={{ padding: 8 }}>Aromatherapy - $5.00</p>
                <p style={{ padding: 8 }}>
                  Full Body Stretching (additional 20 minutes) - $25.00
                </p>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicePage;
