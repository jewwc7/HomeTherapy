import React, {useState, useContext, useEffect} from 'react';
import {Grid, Button, IconButton ,Paper, Hidden} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import DehazeIcon from '@material-ui/icons/Dehaze';
import AppContext from './context/appContext';
import Modal from './Modal';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';



const TopNav = () => {
    const history = useHistory();
    const appContext = useContext(AppContext);
    const {modalVisible, setModalVisible} = appContext;
    const [outline, setOutline] = useState({})
    useEffect(()=>{
        console.log('paging')
    },[outline])
    return (
        <Paper style={styles.mainContainer}>
            <Grid container style={{justifyContent:'space-between',alignItems:'center' }}>
                <Grid item direction='column' style={{}} xs={6} onClick={()=>history.push('/')}
>
                    <h1 style={{marginBottom:3, paddingLeft:'5%'}}>Home Therapy</h1>
                </Grid>
                <Grid item style={{paddingRight:'5%', justifyContent:'flex-end', display:'flex'}} xs={6}>
                    <Hidden smDown>
                    <Button 
                        variant={ outline.home ? 'outlined': null}
                        onClick={()=>setOutline({home:true})}

                    ><Link to = '/' style={styles.link}>Home</Link></Button>
                    <Button 
                      variant={ outline.boss ? 'outlined': null}
                      onClick={()=>setOutline({boss:true})}
                    ><Link to ='/boss' style={styles.link}>Meet the Massuese</Link></Button>
                    <Button 
                        variant={ outline.services ? 'outlined': null}
                        onClick={()=>setOutline({services:true})}
                        ><Link to = '/services' style={styles.link}>Massages</Link></Button>
                    <Button 
                        variant={ outline.contact ? 'outlined': null}
                        onClick={()=>setOutline({contact:true})}
                        ><Link to = '/contact' style={styles.link}>Contact</Link></Button>
                    </Hidden>
                    <Hidden mdUp>
                    <IconButton >
                        <DehazeIcon
                       //     style={{color: '#003E3A'}} //not working
                            color='secondary'
                            onClick={()=>setModalVisible(!modalVisible)}
                        />
                    </IconButton >
                    </Hidden>
                    <Modal/>
                </Grid>
            </Grid>
        </Paper>
    )
}

const styles ={
    mainContainer: {
        width:'100%',
        minHeight: 100,
        display:'flex',
     //   backgroundColor: '#3f0d12',
     //  backgroundImage: 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)',
        backgroundColor:'rgba(250,250,250,.8)',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        border:'none'
    },
    link:{
        textDecoration:'none',
        color:'black'
    }
}

export default TopNav;