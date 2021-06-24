import React, {useContext, useState, useEffect} from 'react'
import AppContext from './context/appContext';
import {Grid, Button, Snackbar, Image, ButtonGroup, Avatar, TextField, MenuItem, List, ListItem} from '@material-ui/core';
import {Card, CardActions, CardContent, CardHeader, CardActionArea} from '@material-ui/core/';
import {makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import myFunctions from './MyFunctions2';
const {isEqualTo, isGreaterThan} = myFunctions;


const ServicePage = () => {
    useEffect(() => {
        setModalVisible(false)
     
    }, [])
    const appContext = useContext(AppContext)
    const {lineHeight, currentState, afterHeaderMargin, setModalVisible, dispatch, smallScreen} = appContext;
    const {massages} = currentState;
    const [hover, setHover] = useState(null)
 
    return (
        <div style={{display:'flex', flexDirection:'column', height:'100%', width:'100%', marginTop:60, }}>
           <div> <h1 
                style={{
               fontSize:60,
               textAlign:isGreaterThan(smallScreen, window.innerWidth) ? 'left' : 'center'

               }}>
                   Services</h1>
            </div>
            <div style={{marginBottom:30, marginTop: afterHeaderMargin, marginLeft:40,}}>
                {massages.map((massage,index)=>{
                    const {title, description} = massage; 
                    return (
                        <Card style={{
                            ...styles.card,
                            ...{transform: hover === index ? 'scale(1.04)' : 'scale(.95)'},
                            ...{backgroundColor: hover === index ? 'rgba(100,100,100,.7)' : 'rgba(220,220,220,1)'}
                            }} 
                            raised 
                            onMouseOver={()=>setHover(index)}
                            onMouseOut={() => setHover(null)}
                        >
                        <CardHeader
                            avatar={
                                <Avatar style={{borderRadius:50, border:'1px solid #003E3A'}}>
                                    {title.charAt(0)}
                                </Avatar>
                            }
                            title={<h2>{title}</h2>}

                        />
                        <CardContent>
                            <p style={{lineHeight:lineHeight}}>{description}</p>
                        </CardContent>
                        <CardActions>
                               <Link to = '/massage'><Button
                                    onClick={()=>dispatch({
                                        type:'Select Massage',
                                        payload: title,
                                    })
                                }
                                >
                                    See More
                                </Button></Link> 
                                <Button
                                variant='contained'
                                // style={{backgroundColor:'rgba(90,0,0,.7)'}}
                                color='primary'
                                >
                                    Book Now
                                </Button>
                        </CardActions>
                    </Card>
        
                    )
                })}
            </div>
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
        marginTop:30,
        marginBottom: 40,
        backgroundColor:'rgba(220,220,220,1)',
    //    boxShadow:' rgb(255, 255, 255) 5px 5px 5px 0px, rgb(0, 0, 0) 4px 4px 15px 0px inset, 5px 5px 17px 11px rgba(0,0,0,0)',
        borderRadius:10,
        width:'90%',  
        minHeight:100,
    //    border: '1px solid rgba(180,0,0,.2)',
    },
    input:{
     //   border:'none',
        width:'40%',
       
    }
 }

export default ServicePage;