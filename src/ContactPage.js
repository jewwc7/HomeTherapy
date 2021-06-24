import React, {useContext, useState} from 'react'
import { ContactForm } from './LandingPage';
import AppContext from './context/appContext';
import {Grid, Button, Snackbar, Image, ButtonGroup, Avatar, TextField, MenuItem, List, ListItem,Chip,Paper} from '@material-ui/core';
import {Card, CardActions, CardContent, CardHeader, CardActionArea} from '@material-ui/core/';
import {makeStyles,} from "@material-ui/core/styles";
import person19 from './Photos/person19.jpg'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import myFunctions from './MyFunctions2';
import { useHistory } from 'react-router-dom';
const {isEqualTo, isGreaterThan} = myFunctions;

export const ContactPage = () => {
    return (
        <Grid container style={{width:'100%'}}>
            <Grid item style={{width:'100%'}}>
              <ContactForm/>
            </Grid>
        </Grid>
    )
}

export default ContactPage;