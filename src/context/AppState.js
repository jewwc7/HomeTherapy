import React, { useState, useReducer, useEffect } from "react";
import AppContext from "./appContext";
import data from "./data";
import myFunctions from "../MyFunctions2";
import myObjectConfigs from "../MyObjectConfigs";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
const { CreateFilter } = myObjectConfigs;
const { filterArrEquality } = myFunctions;

//State File. Import context File and Return ContextFile.Provider
//in value attribute pass any data you want to be accessed
//Don't forget to put/extropolate {props.children}
//this component will wrapped around the entire main app
//main app can access anything in the value by initializing myContext= useContext(MYcontext)
//very important! Have to intialize the context within child components. Not the main app, if I do the main app, intial value of context will be provided all the time
//review onenote for the above
const AppState = (props) => {
  const { massageArr, massageTypes } = data;
  const lineHeight = 1.5;
  const afterHeaderMargin = 24;
  const afterParagraphMargin = 60;
  const mainSectionMargin = 30;
  const ctaColor = "rgba(90,0,0,1)";
  const thirdColor = "rgba(30,70,120,1)"; //blue main color
  const textColor = "rgba(20,20,20,.8)";
  const subtTitleText = 10;
  const bigPText = 24;
  const clickableChip = "rgba(220,220,220,.5)";
  const listItemFont = 20;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [imageDetails, setImageDetails] = useState(false);
  const [statusbar, setStatusbar] = useState({ offset: 1000, message: null }); //600 will ensure off the screen no matter the device
  const [scrolling, setScrolling] = useState(null);
  const [highlight, setHighlight] = useState({ value: null });
  const [sortFilter, setSortFilter] = useState({
    filter: false,
    filterStyle: "",
    sort: false,
    type: "",
  });
  const [page, setPage] = useState({
    landingPage: false,
    categoryItems: false,
  });

  useEffect(() => {
    console.log("fetching");
    // uploadPhotos()
    /*     async function getData(){
        try {
          const request = await axios.post("http://192.168.1.105:19007");
          console.log('request worked')
          const response = await request.data;
         // moveToPracticeItem(response) //send the data to the function so the workers can be split into different 
        uploadPhotos(response)
        } catch (error) {
          return console.log(error)
        }
      }
      getData() */
  }, []);

  function addBlankGrids(array, width, height) {
    if (array.length - 4 === 0) return;
    const blankGridsNum = 4 - array.length;
    // `n` is the size you want to initialize your array
    // `0` is what the array will be filled with (can be any other value)
    const blankGridArr = Array(blankGridsNum).fill(0);
    return blankGridArr.map((item, index) => {
      return (
        <Grid item style={{ width: width, height: height, opacity: 0 }}></Grid>
      );
    });
  }

  const initialState = {
    //intial state object has to come before the usereducer or I will keep getting undefined
    currentUser: {}, //signed in user will go here
    massages: massageArr,
    selectedMassage: massageArr[2],
    practiceItem: null,
    category: null, //will get set once the indivdual item is set, used to filter photos for the might like portion
    statusbar,
    individualItem: {}, //will be set the currently showed item
    categories: [],
  };

  //const searchMatches = currentState.allProducts.filter(product => product.style.includes(text))

  const [currentState, dispatch] = useReducer(reducer, initialState); //initial state is an object in this case

  function reducer(currentState, action) {
    //console.log('I am the payload:' , action.payload)
    switch (action.type) {
      case "Select Massage": //Cannot use use State within the reducer. UseState value will not be updated due to async*review comments
        const config = CreateFilter(
          currentState.massages,
          "title",
          action.payload
        );
        const clickedMassage = filterArrEquality(config)[0];
        console.log(clickedMassage);
        return {
          ...currentState,
          selectedMassage: {
            ...clickedMassage,
          },
        };
      default:
        return currentState;
    }
  }

  //add state for showing/hiding modal
  return (
    <AppContext.Provider
      value={{
        currentState, //passing the current state in as value.
        lineHeight,
        afterHeaderMargin,
        afterParagraphMargin,
        mainSectionMargin,
        modalVisible,
        setModalVisible,
        dispatch,
        thirdColor,
        ctaColor,
        textColor,
        addBlankGrids,
        listItemFont,
        smallScreen,
        clickableChip,
        subtTitleText,
        bigPText,
        massageTypes,
        mediumScreen,
        largeScreen,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
