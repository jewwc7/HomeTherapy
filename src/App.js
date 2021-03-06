import "./App.css";
import LandingPage from "./LandingPage";
import TopNav from "./TopNav";
import ServicePage from "./ServicePage";
import IndividualServicePage from "./IndividualServicePage";
import Boss from "./Boss";
//import Maps from './Maps'
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Grid, Fade } from "@material-ui/core";
import AppContext from "./context/appContext";
import AppState from "./context/AppState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppWrapper() {
  return (
    <AppState>
      <Router>
        <App />
      </Router>
    </AppState>
  );
}

//<Route path = '/maps'>
//Maps/>
//</Route>

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appContainer}>
        <TopNav />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/services">
            <ServicePage />
          </Route>
          <Route path="/massage">
            <IndividualServicePage />
          </Route>
          <Route path="/boss">
            <Boss />
          </Route>
          <Route path="/contact"></Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(30,70,120,1)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#003E3A",
    },
  },
  overrides: {
    MuiButton: {
      label: {
        color: "#fff",
      },
      outlined: {
        borderColor: "rgba(125,0,0,.9)",
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "white",
        color: "white",
      },
    },
  },
});

const useStyles = makeStyles({
  appContainer: {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(250,250,250,.8)",
    // backgroundColor:'rgba(5,0,0,1)',
    // margin:'-10px',
    paddingLeft: 0,
    color: "white",
  },
});
export default AppWrapper;
