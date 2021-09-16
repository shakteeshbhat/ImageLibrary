import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Avatar} from '@material-ui/core';
import {Link} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static"  style={{background:'#22223b'}}>

                <Toolbar>
                    <Avatar  className={classes.large} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/1024px-NASA_Wormball_logo.svg.png"} style={{objectFit:'fit'}}/> >
                        <Typography  style={{fontFamily:'sans-serif',alignContent:"center",fontSize:"1.2rem"}}  className={classes.title}>
                          <Link style={{color:"white",textDecoration:'none'}} to="/">Nasa Image Gallery</Link>
                        </Typography>
                    <Link style={{color:'white',textDecoration:'none'}}  to="/search"   >
                        <Button  variant="outlined" size="small" style={{fontSize:"0.5rem"}} color={'inherit'} className={classes.margin}>Search Gallery</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}

// #1a1a2e
