import React, {useContext, useState, useEffect} from 'react'
import AppContext from './context/appContext';
import {Grid, Button, Snackbar, Image, ButtonGroup, Avatar, TextField, MenuItem, List, ListItem ,Paper} from '@material-ui/core';
import {Card, CardActions, CardContent, CardHeader, CardActionArea} from '@material-ui/core/';
import {makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import person19 from './Photos/person19.jpg';
import person3 from './Photos/person3.jpg';
import person5 from './Photos/Person5.jpg';

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
    const photoArr = [person19,person3,person5]
    const [count, setCount] = useState(0)
    function nextPic(){
        if(isEqualTo(count, photoArr.length-1)){
            setCount(0)
            return
        }
        setCount(count+1)
    }

    useEffect(()=>{
        console.log(count)
    }, [count])

    return (
        <Grid container justify='center' direction='column' style={{marginTop:mainSectionMargin}}>
           <Grid item container direction='column' xs={12} md={12} alignItems='center'>
               <Grid item xs={12} md={6}>
                  <Paper style={{width:'100%'}}>
                  <img src={photoArr[count]} alt='Owner' style={{maxHeight:500, width:'100%', }}></img>
                  <Paper style={{padding:'2%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <h2>Sarah</h2>
                    <div>
                      <Button
                        endIcon={<ArrowRightAltIcon/>}
                        onClick={()=>nextPic()}
                      >
                          Next Pic
                      </Button>
                    </div>
                  </Paper>
                  </Paper>
                </Grid>
            </Grid> 
            <Grid item xs={12} md={6} >
            <Paper style={styles.card} >
         
            <CardContent>
                <h2>Bio</h2>
                <p style={{lineHeight:lineHeight, color:textColor, marginTop:afterHeaderMargin}}>{currentState.selectedMassage.description}</p>
            </CardContent>
            <CardContent style={{marginTop:afterParagraphMargin}}>
                <h2>Qualifications</h2>
                <p style={{lineHeight:lineHeight, color:textColor, marginTop:afterHeaderMargin}}>{currentState.selectedMassage.description}</p>
            </CardContent>
            <CardActions>
                <Grid container xs={12} md={8}>
                <Grid item xs={12} md={10}>
                <Paper elevation={6} style={{display:'flex', justifyContent:'space-between', padding:10,}}>
                    <Button
                       endIcon={<ArrowRightAltIcon/>}
                    >
                        Follow Me
                    </Button>
                    <div style={{display:'flex', justifyContent:'space-between', }}>
                    <TwitterIcon
                        size='large'
                    />
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <PinterestIcon/>
                    </div>
                </Paper>
                </Grid>
                </Grid>
            </CardActions>
          </Paper>
            </Grid>
        </Grid>
    )
}

const styles = {
    card:{
        marginTop:30,
        marginBottom: 50,
     //   backgroundColor:'rgba(100,100,100,1)',
        borderRadius:10,
        width:'100%',  
        minHeight:370,
     //   border: '1px solid rgba(180,0,0,.2)'
    },
    picGrid:{
       // backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)"
       backgroundColor:'red',
    //   width:'200%'
    },
    linear:{
        backgroundColor: '#d3d3d3',
          backgroundImage: 'linear-gradient(315deg, #d3d3d3 0%, #7f8c8d 74%)',
     }
}
export default Boss