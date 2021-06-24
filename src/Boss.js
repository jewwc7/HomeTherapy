import React, {useContext, useState, useEffect} from 'react'
import AppContext from './context/appContext';
import {Grid, Button, Snackbar, Image, ButtonGroup, Avatar, TextField, MenuItem, List, ListItem ,Paper} from '@material-ui/core';
import {Card, CardActions, CardContent, CardHeader, CardActionArea} from '@material-ui/core/';
import {makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import person19 from './Photos/person19.jpg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import myFunctions from './MyFunctions2';
const {isEqualTo, isGreaterThan} = myFunctions;

const Boss = () => {

    const appContext = useContext(AppContext);
    const {lineHeight, afterHeaderMargin,afterParagraphMargin ,mainSectionMargin,smallScreen,textColor,thirdColor, dispatch,currentState} = appContext;

    return (
        <Grid container justify='center' style={{marginTop:mainSectionMargin}}>
           <Grid item direction='column' xs={12} md={6} style={{}}>
                  <Paper style={{}}>
                  <img src={person19} alt='Owner' style={{maxHeight:500, width:'100%', }}></img>
                  <Paper style={{padding:'2%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <h2>Sarah</h2>
                    <div>
                      <Button
                        endIcon={<ArrowRightAltIcon/>}
                      >
                          Next Pic
                      </Button>
                    </div>
                  </Paper>
                  </Paper>
            </Grid> 
            <Grid item>
            <Card style={styles.card} raised>
         
            <CardContent>
                <h2>Bio</h2>
                <p style={{lineHeight:lineHeight, color:textColor, marginTop:afterHeaderMargin}}>{currentState.selectedMassage.description}</p>
            </CardContent>
            <CardContent style={{marginTop:afterParagraphMargin}}>
                <h2>Qualifications</h2>
                <p style={{lineHeight:lineHeight, color:textColor, marginTop:afterHeaderMargin}}>{currentState.selectedMassage.description}</p>
            </CardContent>
            <CardActions>
                    <Button>Follow Me</Button>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <PinterestIcon/>
            </CardActions>
          </Card>
            </Grid>
        </Grid>
    )
}

const styles = {
    card:{
        marginTop:30,
        marginBottom: 50,
        backgroundColor:'rgba(220,220,220,1)',
        borderRadius:10,
        width:'100%',  
        minHeight:370,
     //   border: '1px solid rgba(180,0,0,.2)'
    },
}
export default Boss