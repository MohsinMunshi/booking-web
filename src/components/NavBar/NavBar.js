import React from 'react'
import {AppBar,Toolbar,Typography,IconButton} from '@material-ui/core/';
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import style from './styles'

const NavBar = () => {
    const classes = style()
    return (
        <div className={classes.root}>
            <AppBar className={classes.toolbar} position="static">
                <Toolbar  variant="dense">
                    <Link to ='/'>
                        <IconButton edge="start"
                            className={
                                classes.menuButton
                            }
                            color="inherit"
                            aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                    </Link>
                    <Typography variant="h6" color="inherit">
                        Ticket Booking System
                    </Typography>
                    <Link className={classes.book} to='/status' sytle={{color:'white'}}>
                        <Typography  variant="h6" color="White">
                            Check Status
                        </Typography>
                    </Link> 
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
