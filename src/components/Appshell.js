import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../Navbar.css'


const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 'auto'
    },
    barcolor : {
      background : '#000000'
    },
    menuce : 
    {
        marginLeft: '30%',
        fontSize: "x-large",
        width:300
    }
};45 

class AppShell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }
    handleDrawerToggle = () => this.setState({ toggle: !this.state.toggle })
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.root}>
                     <AppBar position="static"  className={classes.barcolor}>
                            <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                    </AppBar>
                    <Drawer   open={this.state.toggle}   >
                        <MenuItem className={classes.menuce} onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/">
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem className={classes.menuce}  onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/texts">
                                About
                            </Link>
                        </MenuItem>
                        <MenuItem className={classes.menuce}  onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/words">
                                Skills
                            </Link>
                        </MenuItem>
                        <MenuItem className={classes.menuce}  onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/test">
                                Contact
                            </Link>
                        </MenuItem>
                    </Drawer>
                </div>
                <div id="content" style={{ margin: 'auto', marginTop: '20px' }}>
                    {React.cloneElement(this.props.children)}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(AppShell);
