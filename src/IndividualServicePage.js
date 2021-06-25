import React, {useContext, useState, useEffect} from 'react'
import AppContext from './context/appContext';
import {Grid, Button, Snackbar, Image, ButtonGroup, Avatar, TextField, MenuItem, List, ListItem,Paper,Divider,Hidden,Chip} from '@material-ui/core';
import {Card, CardActions, CardContent, CardHeader, CardActionArea} from '@material-ui/core/';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import {makeStyles} from "@material-ui/core/styles";
import myFunctions from './MyFunctions2';
const {isEqualTo, isGreaterThan} = myFunctions;
console.log(window.innerWidth)

const IndividualServicePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        console.log('on masage page')
        setModalVisible(false)

    }, [])
    const appContext = useContext(AppContext)
    const {lineHeight, currentState, afterHeaderMargin, setModalVisible,thirdColor, ctaColor,addBlankGrids, listItemFont, smallScreen, clickableChip,subtTitleText} = appContext;
    const { selectedMassage} = currentState;
    //selectedMassage === null ? selectedMassage ={ ...currentState.massages[0]} : selectedMassage;
    const {technique, benefits, enhancements, title, prices} =selectedMassage;
    const times = Object.keys(prices[0]);
    const massagePrice = Object.values(prices[0]);
    const [priceCard, setPriceCard] = useState({time: times[0], price: massagePrice[0] })

    
    return (
        <div style={{display:'flex', flexDirection:'column', height:'100%', width:'100%', marginTop:afterHeaderMargin, paddingLeft:'3%' }}>
            <h1>{title}</h1>
            <Grid container style={{marginTop: afterHeaderMargin, marginBottom:afterHeaderMargin, borderRadius:20}}>
                        <Hidden mdUp>
                                {times.map((time,index)=>{
                                    return (
                                <Grid item xs={3}>
                                 <Chip
                                    style={{
                                        backgroundColor:  priceCard.time === time ? clickableChip : 'rgba(20,20,20,.1)',
                                        ...{transform: priceCard.time === time ? 'scale(1.2)' : 'scale(1)'},
                                        fontSize: 18

                                    }}
                                    onClick = {()=>{
                                        setPriceCard({
                                            time: times[index],
                                            price:massagePrice[index]
                                        })
                                    }}
                                    label={`${time} min`}
                                    variant='outlined'
                                    >
                                    </Chip>
                                    </Grid>
                                    )
                                  })
                                }
                        </Hidden>
                    </Grid>
            <Hidden mdUp>
                <Paper elevation={6} style={styles.priceCardPaper}>
                    <Grid item style={{display:'flex', flexDirection:'column', flex:1, justifyContent:'space-between'}}>
                      <div style={{height:'35%', justifyContent:'space-evenly', display:'flex', flexDirection:'column',}}>
                       <p style={{alignSelf:'center', fontSize:30,color:'rgba(100,100,100,1)'}}>{priceCard.time} Minutes</p>
                       <Divider style={{display:'flex', backgroundColor:ctaColor, width:'80%', alignSelf:'center'}}></Divider>
                      </div>
                      <div style={{alignSelf:'center', }}>
                          <h2 style={{fontSize:28, color:'rgba(60,60,60,1)'}}>${priceCard.price}</h2>
                      </div>
                      <div style={{alignSelf:'center', paddingBottom:'10%'}}>
                        <Button
                          variant='contained'
                           color='primary'
                         >
                              Book Now
                         </Button>                  
                        </div>
                    </Grid>
                </Paper>
            </Hidden>
            <Hidden smDown>
            <div style={{paddingTop:afterHeaderMargin, display:'flex', flexDirection:'row', maxWidth:'90%', justifyContent:'space-between'}}>
                {times.map((time,index)=>{
                    return(
                      <Paper elevation={3} style={styles.priceCardPaper}>
                    <Grid item style={{display:'flex', flexDirection:'column', flex:1, justifyContent:'space-between'}}>
                      <div style={{height:'35%', justifyContent:'space-evenly', display:'flex', flexDirection:'column',}}>
                       <p style={{alignSelf:'center', fontSize:30, color:'rgba(100,100,100,1)'}}>{time} Minutes</p>
                       <Divider style={{display:'flex', backgroundColor:ctaColor, width:'80%', alignSelf:'center'}}></Divider>
                      </div>
                      <div style={{alignSelf:'center', }}>
                          <h2 style={{fontSize:28, color:'rgba(80,80,80,1)'}}>${massagePrice.filter((price,priceIndex) => priceIndex === index)[0]}</h2>
                      </div>
                      <div style={{alignSelf:'center', paddingBottom:'10%'}}>
                        <Button
                          variant='contained'
                           color='primary'
                         >
                              Book Now
                         </Button>                  
                        </div>
                    </Grid>
                </Paper>
                    )
                })}
              {addBlankGrids(times,250,250)}
            </div>
            </Hidden>
            <Grid item container spacing={2}  style={{marginBottom:30, marginTop: afterHeaderMargin, display:'flex', maxWidth:'100%'}}>
                <Grid item xs={10} md={4}>
                    <Card 
                      style={{
                            ...styles.card,
                            alignItems:isGreaterThan(smallScreen, window.innerWidth) ? 'left' : 'left'
                            }} 
                            raised 
                        >
                        <CardHeader
                            title={<h3>{'Benefits'}</h3>}
                        />
                        <CardContent>
                            <List>
                            {benefits.map((benefit,index)=>{
                                return <ListItem>{benefit}</ListItem>
                            })}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} md={4}>
                    <Card style={{
                            ...styles.card,
                            alignItems:isGreaterThan(smallScreen, window.innerWidth) ? 'left' : 'left'

                            }} 
                            raised 
                        >
                        <CardHeader
                            title={<h3>{'Technique'}</h3>}
                        />
                        <CardContent style={{}}>
                            <List style={{}} >
                            {technique.map((technique,index)=>{
                                return <ListItem>{technique}</ListItem>
                            })}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} md={2} style={{margintop: 100, alignSelf:'center',}}>
                    <Paper style={{padding:10}}> 
                        <h1>{isGreaterThan(0,enhancements.length) ? 'Enhancements Incluced' : null}</h1>
                        <List>
                            {isGreaterThan(0,enhancements.length) ? enhancements.map((enhancement,index)=>{
                                return <ListItem style={{fontSize: listItemFont}}>{enhancement}</ListItem>;
                            })
                            : <ListItem>Enhancements paid sepearately</ListItem>
                            }
                        </List>
                        <Button
                            endIcon={<ArrowRightAltIcon/>}
                            style={{fontSize:subtTitleText,marginLeft:'10%'}}
                        >
                            See Enhancements
                        </Button>

                    </Paper>
                 </Grid>
            </Grid>
            <Button
                variant='contained'
                color='primary'
                style={{alignSelf:'center', width:'50%', marginBottom:'5%', height:50}}
            >
                Book Now
            </Button>
        </div>
     )
}


const styles = {
    ctaBtn:{
      backgroundColor:'rgba(90,0,0,.7)',
      color:'white',
      marginTop:50,
      width:'50%',
    },
    descripGridStyle:{
    //  backgroundColor:'red',
        flex:1,
    },
    card:{
        display:'flex',
        flexDirection:'column',
     //   marginTop:30,
      //  marginBottom: 40,
        backgroundColor:'rgba(230,230,230,.8)',
        borderRadius:10,
        height:'100%',
    },
    input:{
     //   border:'none',
        width:'40%',
       
    },
    priceCardPaper:{
        width:250,
        height:250, 
        backgroundColor:'rgba(180, 180, 180, .5)',
        display:'flex',
        justifyContent:'space-evenly',
        border:'.5px solid white'
    },

 }

export default IndividualServicePage;