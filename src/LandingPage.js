import React, {useContext, useState} from 'react'
import AppContext from './context/appContext';
import {Grid, Button, Snackbar, Image, ButtonGroup, Avatar, TextField, MenuItem, List, ListItem,Chip,Paper,Fade, Slide} from '@material-ui/core';
import {Card, CardActions, CardContent, CardHeader, CardActionArea, CardMedia} from '@material-ui/core/';
import {makeStyles,} from "@material-ui/core/styles";
import person19 from './Photos/person19.jpg'
import massageGun from './Photos/massageGun.jpg'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import myFunctions from './MyFunctions2';
import { useHistory } from 'react-router-dom';
const {isEqualTo, isGreaterThan} = myFunctions;

//use this so I can refernce object value instead of strings. Change in one place affects all which is great
const massageTypes = {
  swedish:'Swedish',
  deepTissue: 'Deep Tissue',
  sports:'Sports Massage',
  thai:'Thai Massaage',
  thirty: '30 minutes',
  sixty: '60 minutes',
  ninety: '90 Minutes',
  oneTwenty: '120 Minutes'
}




const LandingPage = (props) => {
   const classes = useStyles()
   const appContext = useContext(AppContext)
   const {lineHeight, afterHeaderMargin, smallScreen,} = appContext;
   const history = useHistory();
    return (
        <div style={{}}>
            <Grid container direction='row' justify='space-between'  style={{color:'white', padding:15, backgroundColor:'rgba(20,20,20,.1)'}} > 
              <Slide in mountOnEnter direction='up' timeout={{ appear: 300, enter: 600,  }}>
                <Grid item direction='column' xs={12} md={6} style={{}}>
                  <Paper style={{}}>
                  <img {...props} src={person19} alt='Owner' style={{maxHeight:500, width:'100%', }}></img>
                  <Paper style={{padding:'2%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <h2>Sarah</h2>
                    <div>
                      <Button
                        endIcon={<ArrowRightAltIcon/>}
                        onClick={()=>history.push('./boss')}
                      >
                          Meet Sarah
                      </Button>
                    </div>
                  </Paper>
                  </Paper>
                </Grid>
              </Slide>
                <Grid item container direction='column'  style={styles.descripGridStyle} xs={12} md={6}>
                <Fade in timeout={{ appear: 900, enter: 1200, }}>
                  <Grid item container style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center'  }}>
                    <Grid item style={{flexDirection:'column',}}> 
                    <h1 
                      style={{
                        textAlign:isGreaterThan(smallScreen, window.innerWidth) ? 'left' : 'left',
                        paddingTop: isGreaterThan(smallScreen, window.innerWidth) ? 0 : 30

                      }}
                      >
                          Mobile Massuese
                    </h1>
                    <p style={{width:320, marginTop:afterHeaderMargin, lineHeight: lineHeight }}>Want a break from the daily grind? CityTouch Licensed Massage Therapy’s broad range of massage therapies offers result-driven massage to improve your health. Our massage therapists are licensed and insured by New York State and are regularly measured on high standards of quality assurance—ensuring a safe, positive, and beneficial experience for our clients.</p>
                    </Grid>  
                    <Grid item container style={{width:'100%', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <Button
                        style={styles.ctaBtn}
                        size='large'
                        color='primary'
                        variant='contained'
                    >
                        Book Now
                    </Button>
                    <Button
                        size='large'
                        variant='text'
                        endIcon={<ArrowRightAltIcon/>}
                        style={{width:'40%', marginTop:'7%'}}
                        onClick={()=>history.push('./maps')}
                     >
                         Location
                    </Button>
                    </Grid>
                    </Grid>
                </Fade>
                </Grid>
            </Grid>
            <Massages/>
            <Reviews/>
            <ContactForm/>
        </div>
    )
}

const Massages = () =>{
    const appContext = useContext(AppContext);
    const [massageCard, setMassageCard] = useState({massageSelected:null, timeSelected:null})
    const {lineHeight, afterHeaderMargin, mainSectionMargin,smallScreen,textColor,thirdColor, dispatch,currentState,clickableChip} = appContext;
    const {swedish,deepTissue,sports,thai, thirty,sixty,ninety, oneTwenty}= massageTypes
    const history =useHistory()
    function setCardandMassage(massage){
      setMassageCard((prev)=>{
        return {
          ...prev,
          massageSelected: massage
        }
      })
      dispatch({type: 'Select Massage', payload: massage})
    }
    //change the selectedMassage in currentState then go to the singleMassagepage
    function goSingleMassagePage(massage, link){
       dispatch({
        type:'Select Massage',
        payload: massage,
       })
       history.push(link)
    }
 
    return (
      <Grid container direction='row' style={{padding:15, marginTop:mainSectionMargin, ...styles.linear  }} justify='space-between' >
        <Grid item direction='column' xs={12} md={6}>
          <h1 style={{ }}>Massages</h1>
          <Grid container item style={{marginTop:afterHeaderMargin, display:'flex', width:'100%', flexWrap:'wrap', }} >
            <Grid item xs={6} md={3} >
            <Chip 
            label='Swedish'
            avatar={<Avatar style={{backgroundColor: isEqualTo(swedish, massageCard.massageSelected ) ? thirdColor : ''}}>S</Avatar>} 
            style={{
                fontSize: 18
            }}
            variant='outlined'
            onClick={()=> setCardandMassage(swedish)}
            deleteIcon={<ArrowRightAltIcon/>}
            onDelete={()=> true}
            />
            </Grid>
            <Grid item xs={6} md={3}>
            <Chip
            label= 'Sports'
            avatar={<Avatar style={{backgroundColor: isEqualTo(sports, massageCard.massageSelected ) ? thirdColor : ''}}>S</Avatar>} 
            style={{
                fontSize:18,
            }}
            variant='outlined'
            onClick={()=> setCardandMassage(sports)}
            deleteIcon={<ArrowRightAltIcon/>}
            onDelete={()=> true}
            />
            </Grid>
            <Grid item xs={12} md={6} style={{paddingTop:isGreaterThan(smallScreen, window.innerWidth) ? 0 : '5%'}}>
            <Chip
            label= 'Deep Tissue'
            avatar={<Avatar style={{backgroundColor: isEqualTo(deepTissue, massageCard.massageSelected ) ? 'rgba(200,100,100,1)' : ''}}>D</Avatar>} 
            style={{
                fontSize:18,
         //     marginRight: isGreaterThan(smallScreen, window.innerWidth) ? '5%' : 0,
            }}
            variant='outlined'
            onClick={()=> setCardandMassage(deepTissue)}
            deleteIcon={<ArrowRightAltIcon/>}
            onDelete={()=> true}
            />
            </Grid>
            <Grid item xs={6} md={3} style={{paddingTop:isGreaterThan(smallScreen, window.innerWidth) ? '5%' : '5%'}}>
            <Chip
            label= 'Thai'
            avatar={<Avatar style={{backgroundColor: isEqualTo(thai, massageCard.massageSelected ) ? thirdColor : ''}}>T</Avatar>} 
            style={{
              fontSize:18
            }}
            variant='outlined'
            onClick={()=> setCardandMassage(thai)}
            deleteIcon={<ArrowRightAltIcon/>}
            onDelete={()=> true}
            />
            </Grid>
          </Grid>
          <Card style={styles.card} raised>
            <CardHeader
                avatar={
                    <Avatar style={{borderRadius:50, border:'1px solid #003E3A'}}>
                        K
                    </Avatar>
                }
                title={<h2 style={{color:textColor}}>{currentState.selectedMassage.title}</h2>}
            />
            <CardContent style={{display:'flex', justifyContent:'space-between', width:'60%'}}>
              <Chip
                label= '30min'
                variant='outlined'
                disabled={currentState.selectedMassage.prices[0].hasOwnProperty(30) ? false : true   }
                clickable={currentState.selectedMassage.prices[0].hasOwnProperty(30) ? true : false   }
                style={{
                  backgroundColor: currentState.selectedMassage.prices[0].hasOwnProperty(30) ? clickableChip :null
                }}

              />
              <Chip
                label='60min'
                disabled={currentState.selectedMassage.prices[0].hasOwnProperty(60) ? false : true   }
                variant='outlined'
                clickable={currentState.selectedMassage.prices[0].hasOwnProperty(60) ? true : false   }
                style={{
                  backgroundColor: currentState.selectedMassage.prices[0].hasOwnProperty(60) ? clickableChip :null
                }}
              />
              <Chip
                label='90min'
                variant='outlined'
                disabled={currentState.selectedMassage.prices[0].hasOwnProperty(90) ? false : true   }
                clickable={currentState.selectedMassage.prices[0].hasOwnProperty(90) ? true : false   }
                style={{
                  backgroundColor: currentState.selectedMassage.prices[0].hasOwnProperty(90) ? clickableChip :null
                }}


              />
              <Chip
                label='120min'
                variant='outlined'
                disabled={currentState.selectedMassage.prices[0].hasOwnProperty(120) ? false : true   }
                clickable={currentState.selectedMassage.prices[0].hasOwnProperty(120) ? true : false   }
                style={{
                  backgroundColor: currentState.selectedMassage.prices[0].hasOwnProperty(120) ? clickableChip :null
                }}


              />
            </CardContent>
            <CardContent style= {{lineHeight:lineHeight, color:textColor}}>
               {currentState.selectedMassage.description}
            </CardContent>
            <CardActions>
                    <Button
                      onClick={()=>goSingleMassagePage(currentState.selectedMassage.title, '/massage' )}
                    >
                      See More
                    </Button>
                    <Button
                      variant='contained'
                     // style={{backgroundColor:'rgba(90,0,0,.7)'}}
                     color='primary'
                    >
                        Book Now
                    </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid 
          item 
          direction='column' 
          xs={12} 
          md={6}
          style={{                   
             paddingTop: isGreaterThan(smallScreen, window.innerWidth) ? 0 : 60
          }}
          >
            <h1 style={{}}>EnhanceMents</h1>
            <Grid container item style={{marginTop:afterHeaderMargin, display:'flex', width:'100%', flexWrap:'wrap', }} >
            <Grid item xs={6} md={5} >
            <Chip 
            label='Muscle Gun Therapy'
            avatar={<Avatar style={{backgroundColor: isEqualTo(thirty, massageCard.timeSelected )? thirdColor : ''}}>S</Avatar>} 
           // color={selected ? 'secondary': ''} 
            style={{
      //        marginRight: isGreaterThan(smallScreen, window.innerWidth) ? '5%' : 0,
       //       marginBottom: isGreaterThan(smallScreen, window.innerWidth) ? 0 : '5%'
                fontSize: 18
            }}
            variant='outlined'
            onClick={()=>setMassageCard((prev)=>{
              return {
                ...prev,
                timeSelected: thirty
              }
            })}
            deleteIcon={<ArrowRightAltIcon/>}
            onDelete={()=> true}
            />
            </Grid>
            <Grid item xs={12} md={5} style={{paddingTop:isGreaterThan(smallScreen, window.innerWidth) ? 0 : '5%'}}>
            <Chip
            label='Aroma Therapy'
            avatar={<Avatar style={{backgroundColor: isEqualTo(sixty, massageCard.timeSelected ) ? thirdColor : ''}}>S</Avatar>} 
            style={{
                fontSize:18,
      //        marginRight: isGreaterThan(smallScreen, window.innerWidth) ? '5%' : 0,
      //        marginBottom: isGreaterThan(smallScreen, window.innerWidth) ? 0 : '5%'
                
            }}
            variant='outlined'
            onClick={()=>setMassageCard((prev)=>{
              return {
                ...prev,
                timeSelected: sixty
              }
            })}
            deleteIcon={<ArrowRightAltIcon/>}
            onDelete={()=> true}
            />
            </Grid>
            <Grid item xs={12} md={5} style={{paddingTop:isGreaterThan(smallScreen, window.innerWidth) ? '5%' : '5%'}}>
            <Chip
            label='Advanced Muscle Therapy'
            avatar={<Avatar style={{backgroundColor: isEqualTo(ninety, massageCard.timeSelected ) ? thirdColor : ''}}>D</Avatar>} 
            style={{
                fontSize:18,
         //     marginRight: isGreaterThan(smallScreen, window.innerWidth) ? '5%' : 0,
            }}
            variant='outlined'
            onClick={()=>setMassageCard((prev)=>{
              return {
                ...prev,
                timeSelected: ninety
              }
            })}
            deleteIcon={<ArrowRightAltIcon/>}
            onDelete={()=> true}
            />
            </Grid>
          </Grid>

          <Card style={styles.card} raised>
            <CardHeader
                avatar={
                    <Avatar style={{borderRadius:50, }}>
                        M
                    </Avatar>
                }
                title={<h2 style={{color:textColor}}>Muscle Gun Therapy</h2>}
            />
               <CardMedia
                 image={massageGun}
                 title="Paella dish"
                 style={{height: 200, resizeMode:'contain'  }}
               />
            <CardContent>
                <p>Quickly sweep across your upper traps, palms, quads, hamstrings, and feet for 15 seconds each to help wake up the body and get blood flowing. </p>
            </CardContent>
            <CardActions>
                    <Button>See More</Button>
                    <Button
                      variant='contained'
                      color='primary'
                    >
                        Book Now
                    </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    )
}

export const ContactForm = () => {
  const history = useHistory()
  const appContext = useContext(AppContext);
  const {subtTitleText,bigPText,afterHeaderMargin,afterParagraphMargin, smallScreen,textColor} = appContext;
    return (
     <Grid container  justify='center' style={{padding:15, marginTop:60}}>
      <Grid item xs={12} md={6}>
         <Paper style={{padding:15, }} elevation={10}>
         <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
           <h1 style={{}} >Contact Me</h1>
           <Avatar
            src={person19}
            onClick={()=>history.push('./boss')}
            />
         </div>
        <Grid item container justify='space-between' direction='column' style={{padding:15}}>
         <Grid item style={{width:'100%',}} xs={12} md={6} >
         <form action="action_page.php" style={{flexDirection:'column', display:'flex', width:'90%'}}>
          <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap' ,paddingBottom:20, maxWidth: '100%', minHeight:200}}>
            <TextField 
              label="First Name" 
              variant='standard'

              inputProps={{
                style:{
              //    backgroundColor:'rgba(20,20,20,.5)',
              //    height:30,

                }
              }} 
              InputLabelProps={{
                style: {
                   color: '#003E3A'
                  }
                }}
              style={{...styles.input, marginRight:15, color:'white'}}></TextField>
            <TextField
               variant='standard'
               label="Last Name"
               InputLabelProps={{
                style: {
                   color: '#003E3A'
                  }
                }}
               style={{...styles.input, marginRight:15}}
            >
            </TextField>

            <TextField label='Age' select size='medium' style={{...styles.input, marginRight:15}}>
              <MenuItem value={10} onClick={(e)=> console.log(e.target)}>18-30</MenuItem>
              <MenuItem value={20}>31-49</MenuItem>
              <MenuItem value={30}>50 or Older</MenuItem>
            </TextField>
            <TextField label='Gender' select size='medium' style={{...styles.input, marginRight:15}}>
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
              <MenuItem value={30}>Non Binary</MenuItem>
              <MenuItem value={30}>Other</MenuItem>
            </TextField>
          </div>
            <TextField multiline variant='outlined' placeholder="Write something.." style={{}}></TextField >
            <Button color='primary' variant='contained' style={{...styles.ctaBtn,}}>Submit</Button>
          </form>
         </Grid>
        </Grid>
        </Paper>
        </Grid>
        <Grid item container xs={12} md={6} justify='center' alignItems='center'
          style={{
            marginTop:isGreaterThan(smallScreen, window.innerWidth) ? 0 : '20%',
          }}
        >
          <div style={{}}>
            <h1 style={{textAlign:'center',}}>Travel Radius</h1>
          </div>
          <div style={{marginTop:afterHeaderMargin, height:'80%'}}>
            <p style={{fontSize: 18, color:textColor }}>Will Travel within 10 mile Radius of the Kansas City Zoo</p>
            <p style={{fontSize: bigPText, textAlign:'center', marginTop:afterHeaderMargin,}}>6800 Zoo Dr<br></br> Kansas City, MO 64132</p>
            <Paper style={{height:'60%',marginTop:afterHeaderMargin,}}>Google Maps</Paper>
          </div>
        </Grid>
        <Grid item xs={12} style={{
          marginTop:isGreaterThan(smallScreen, window.innerWidth) ? '5%' : '40%',
          borderLeft: '2px solid rgba(0,62,58,1)'
        }} 
          justify='flex-end' 
        >
            <FacebookIcon
                style={{fontSize:60, }}
            />
            <TwitterIcon
                style={{fontSize:60}}
            />
            <InstagramIcon
                style={{fontSize:60}}
      
            />
            <PinterestIcon 
                style={{fontSize:60}}
            />
         </Grid>
     </Grid>

    )
}

const Reviews = () => {
  return (
    <Grid container style={{backgroundColor:'rgba(240,240,240,.5)', height:350, justifyContent:'center', alignItems:'center', marginTop:'10%'}}>
      <Grid item xs={10} md={6}>
        <Paper  style={{minHeight:200}}>
          <Card style={{height:'100%'}}>
          <CardHeader
                avatar={
                    <Avatar style={{borderRadius:50, border:'1px solid #003E3A'}}>
                        <TwitterIcon/>
                    </Avatar>
                }
                title={<h3 style={{color:'black'}}>Mikey Said</h3>}
            />
            <CardContent>
            I stayed in town for a few days, looking for the best massage in Kansas City, I definitely found it!  Not from the area I am a bit nervous, but everything is great!  I am a hair stylist, with a lot of physical pain and pain, they are beyond my expectations, and getting rid of those still makes it a relaxing experience!  
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  )
}

const styles = {
    ctaBtn:{
     // backgroundColor:'rgba(90,0,0,.7)',
  //   backgroundColor:'rgba(0, 62, 58, 1)',
      color:'white',
      marginTop:50,
      width:'40%',
    },
    descripGridStyle:{
    //  backgroundColor:'red',
        flex:1,
    },
    card:{
        marginTop:30,
        backgroundColor:'rgba(100,100,100,1)',
     //   backgroundColor: '#3f0d12',
      //  backgroundImage: 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)',
        borderRadius:10,
        width:'90%',  
        minHeight:450,
    },
    input:{
     //   border:'none',
        width:'40%',
    },
    listItemStyle:{
      display:'flex', 
      justifyContent:'space-between', 
      fontSize:24
    },
    linear:{
       backgroundColor: 'rgba(90,0,0,1)',
      // backgroundImage: 'linear-gradient(315deg, #d3d3d3 0%, rgba(90,0,0,.7) 74%)',
    },
 }

 const useStyles = makeStyles({
     btn:{
       color: '#003E3A',
       
     }
 })

 

export default LandingPage;