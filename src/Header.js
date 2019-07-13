import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconMenu from '@material-ui/icons/Menu';
import IconHome from '@material-ui/icons/Home';
import IconFace from '@material-ui/icons/Face';
import IconWork from '@material-ui/icons/Code';
import Close from '@material-ui/icons/Close';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

// create styles for classes
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: 70,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%'
    },
    appBar: {
        backgroundColor: 'gray',
        borderBottom: 'solid 1px #fff',
        height: 70,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: 'none'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        alignItems: 'center'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

const Header = () => {

    const classes = useStyles();
    const theme = useTheme();
    
    const [open, setOpen] = React.useState(false);
    const [top, setTop] = React.useState(true);

    function handleDrawerOpen() {
        setOpen(true);
    }
    function handleDrawerClose() {
        if (open === true) {
            setOpen(false);
        }
        
    }

    document.addEventListener('scroll', () => {
        const isTop = window.scrollY < 200;
        if (isTop !== top) {
            onScroll(isTop);
        }
    });

    function onScroll(isTop) {
        setTop(isTop);
    };

    return(
        <div className={classes.root} onClick={handleDrawerClose}>
            <CssBaseline />
            <AppBar 
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                // style={top ? {backgroundColor: 'transparent'} : {backgroundColor: 'gray'} }
            >
                <Toolbar>
                    <IconButton 
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <IconMenu />
                    </IconButton>
                    <Typography color="inherit" noWrap style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        Eddie Kim Homepage
                    </Typography>
                </Toolbar>
                <Drawer 
                    variant="persistent"
                    anchor="left"
                    className={classes.drawer}
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    onClose={handleDrawerClose}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <Close /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem component={Link} to="/" button>
                            <ListItemIcon><IconHome /></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem component={Link} to="/myself" button>
                            <ListItemIcon><IconFace /></ListItemIcon>
                            <ListItemText primary="Myself" />
                        </ListItem>
                        <ListItem component={Link} to="/projects" button>
                            <ListItemIcon><IconWork /></ListItemIcon>
                            <ListItemText primary="Projects" />
                        </ListItem>
                    </List>
                </Drawer>
            </AppBar>
        </div>
    );
}

export default Header;