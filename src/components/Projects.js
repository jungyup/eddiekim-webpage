import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { Dialog, DialogTitle, DialogContent, DialogActions, Toolbar, AppBar, Button } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import rokemon_01 from '../images/rokemon_01.png';
import rokemon_02 from '../images/rokemon_02.png';
import rokemon_03 from '../images/rokemon_03.png';
import rokemon_04 from '../images/rokemon_04.png';
import rokemon_05 from '../images/rokemon_05.png';
import spotify_01 from '../images/spotify_01.png';
import spotify_02 from '../images/spotify_02.png';
import spotify_03 from '../images/spotify_03.png';
import spotify_04 from '../images/spotify_04.png';
import spotify_05 from '../images/spotify_05.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: 'gray',
        borderBottom: 'solid 1px #fff',
        height: 70,
        position: 'relative'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1
    },
    container: {
        padding: 10,
        textAlign: 'center',
        margin: 'auto',
        width: '100%',
        flexBasis: '90%'
    },
    projectPaper: {
        padding: 20,
        width: '100%',
        //cursor: 'n-resize',
        float: 'left'
    },
    instructionPaper: {
        padding: 40,
        width: '90%',
        margin: 'auto',
        textAlign: 'left'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        float: 'left'
    },
    innerProjectPaper: {
        padding: 10,
        float: 'left',
        width: '100%',
        margin: 'auto'
    },
    projectHeader: {
        padding: 10,
        margin: 10
    },
    screenshot: {
        padding: 10,
        float: 'left',
        cursor: 'pointer'
    },
    paperTitle: {
        padding: 20,
        color: '#979597'
    },
    paperSubtitle: {
        padding: 10,
        fontWeight: 'bold',
        color: '#979597'
    },
    paperSubtitleDesc: {
        fontStyle: 'italic',
        color: '#979597'
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Projects = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState({ window: false, name: "" });
    const [imgOpen, setImgOpen] = React.useState({ window: false, name: "", order: "" });

    function handleClickOpen (projectName) {
        setOpen({
            ...open,
            window: true, 
            name: projectName
        });
    }

    function handleClickClose() {
        setOpen({
            ...open,
            window: false,
        });
    }

    function handleImageOpen (imageName, imageOrder) {
        setImgOpen({
            ...imgOpen,
            window: true, 
            name: imageName,
            order: imageOrder
        });
    }

    function handleImageClose() {
        setImgOpen({
            ...imgOpen,
            window: false,
        });
    }
    
    return (
        <section id="projects" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.container}>
                    <Grid item xs={12} className={classes.projectPaper}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" component="h3" className={classes.paperTitle}>
                                Personal Homepage (This website)
                            </Typography>
                            <Grid item xs={5} className={classes.innerProjectPaper}>
                                
                            </Grid>
                            <Grid item xs={7} className={classes.innerProjectPaper}>
                                <Typography varinat="h6" className={classes.paperSubtitle}>
                                    Developed with
                                </Typography>
                                <Typography variant="body1" className={classes.paperSubtitleDesc}>
                                    JavaScript, HTML5, CSS3, React with Redux
                                </Typography>
                                <Typography varinat="h6" style={{ fontWeight: 'bold', padding: '10px', marginTop: '15px' }}>
                                    GitHub Link
                                </Typography>
                                <Typography variant="body1" className={classes.paperSubtitleDesc}>
                                    <a href="https://github.com/jungyup/eddiekim-webpage">Personal Homepage GitHub Link</a>
                                </Typography>
                                <div style={{ padding: '15px', marginTop: '10px' }}>
                                    <Button variant="outlined" color="primary" onClick={() => handleClickOpen("spotify")}>Read More</Button>
                                </div>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={classes.projectPaper}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" component="h3" className={classes.paperTitle}>
                                Wedding Invitation Application
                            </Typography>
                            <Grid item xs={6} className={classes.innerProjectPaper}>
                                
                            </Grid>
                            <Grid item xs={6} className={classes.innerProjectPaper}>
                                <Typography varinat="h6" className={classes.paperSubtitle}>
                                    Developed with
                                </Typography>
                                <Typography variant="body1" className={classes.paperSubtitleDesc}>
                                    JavaScript, HTML5, CSS3, React, Node with Express, mySQL
                                </Typography>
                                <Typography varinat="h6" style={{ fontWeight: 'bold', padding: '10px', marginTop: '15px' }}>
                                    GitHub Link
                                </Typography>
                                <Typography variant="body1" className={classes.paperSubtitleDesc}>
                                    <a href="https://github.com/jungyup/wedding-app">Wedding Invitation Application GitHub Link</a>
                                </Typography>
                                <div style={{ padding: '15px', marginTop: '10px' }}>
                                    <Button variant="outlined" color="primary" onClick={() => handleClickOpen("wedding")}>Read More</Button>
                                </div>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={classes.projectPaper}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" component="h3" className={classes.paperTitle}>
                                Spotify Search Engine
                            </Typography>
                            <Grid item xs={5} className={classes.innerProjectPaper}>
                            <Carousel showArrows={true} showThumbs={false}>
                                <div>
                                    <img src={spotify_02} alt="spotify_01" />
                                    <p className="legend">Search for either Artist or Album</p>
                                </div>
                                <div>
                                    <img src={spotify_03} alt="spotify_02" />
                                    <p className="legend">Click Artist image to go Artist Page</p>
                                </div>
                                <div>
                                    <img src={spotify_04} alt="spotify_03" />
                                    <p className="legend">Artist page with detailed information and related Artists</p>
                                </div>
                                </Carousel>
                            </Grid>
                            <Grid item xs={7} className={classes.innerProjectPaper}>
                                <Typography varinat="h6" className={classes.paperSubtitle}>
                                    Developed with
                                </Typography>
                                <Typography variant="body1" className={classes.paperSubtitleDesc}>
                                    JavaScript, HTML5, CSS3, React, Node with Express and used public API from Spotify
                                </Typography>
                                <Typography varinat="h6" style={{ fontWeight: 'bold', padding: '10px', marginTop: '15px' }}>
                                    GitHub Link
                                </Typography>
                                <Typography variant="body1" className={classes.paperSubtitleDesc}>
                                    <a href="https://github.com/jungyup/spotify-search">Spotify GitHub Link</a>
                                </Typography>
                                <div style={{ padding: '15px', marginTop: '10px' }}>
                                    <Button variant="outlined" color="primary" onClick={() => handleClickOpen("spotify")}>Read More</Button>
                                </div>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={classes.projectPaper}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" component="h3" className={classes.paperTitle}>
                                Rokemon Encounter
                            </Typography>
                            <Grid item xs={5} className={classes.innerProjectPaper}>
                                <Carousel showArrows={true} showThumbs={false}>
                                <div>
                                    <img src={rokemon_01} alt="rokemon_01" />
                                    <p className="legend">Initial Screen</p>
                                </div>
                                <div>
                                    <img src={rokemon_02} alt="rokemon_02" />
                                    <p className="legend">Move with arrow key</p>
                                </div>
                                <div>
                                    <img src={rokemon_03} alt="rokemon_03" />
                                    <p className="legend">You caught one of Rokemons!</p>
                                </div>
                                </Carousel>
                                {/* <img alt="rokemonImg" src={rokemon_02} style={{ width: '100%', height: '100%', padding: '10px' }} /> */}
                            </Grid>
                            <Grid item xs={7} className={classes.innerProjectPaper}>
                                <Typography varinat="h6" className={classes.paperSubtitle}>
                                    Developed with
                                </Typography>
                                <Typography variant="body1" className={classes.paperSubtitleDesc}>
                                    JavaScript, HTML5, CSS3, React
                                </Typography>
                                <Typography varinat="h6" style={{ fontWeight: 'bold', padding: '10px', marginTop: '15px' }}>
                                    GitHub Link
                                </Typography>
                                <Typography variant="body1" className={classes.paperSubtitleDesc}>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jungyup/wild_rokemon_encounter">https://github.com/jungyup/wild_rokemon_encounter</a>
                                </Typography>
                                <div style={{ padding: '15px', marginTop: '10px' }}>
                                    <Button variant="outlined" color="primary" onClick={() => handleClickOpen("rokemon")}>Read More</Button>
                                </div>
                            </Grid>
                        </Paper>
                    </Grid>
                    {(function () {
                        switch(open.name) {
                            case 'wedding':
                                return (
                                    <Dialog fullScreen open={open.window} onClose={handleClickClose} TransitionComponent={Transition}>
                                        <AppBar className={classes.appBar}>
                                            <Toolbar>
                                                <IconButton edge="start" color="inherit" onClick={handleClickClose} aria-label="Close">
                                                <CloseIcon />
                                                </IconButton>
                                                <Typography variant="h6" className={classes.title}>
                                                    Wedding Invitation App
                                                </Typography>
                                            </Toolbar>
                                        </AppBar>
                                        
                                    </Dialog>
                                )
                            case 'spotify':
                                return (
                                    <Dialog fullScreen open={open.window} onClose={handleClickClose} TransitionComponent={Transition}>
                                        <AppBar className={classes.appBar}>
                                            <Toolbar>
                                                <IconButton edge="start" color="inherit" onClick={handleClickClose} aria-label="Close">
                                                <CloseIcon />
                                                </IconButton>
                                                <Typography variant="h6" className={classes.title}>
                                                    Spotify
                                                </Typography>
                                                <Button color="inherit" href="">
                                                    Demo Link
                                                </Button>
                                            </Toolbar>
                                        </AppBar>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} className={classes.container}>
                                                <Grid item xs={12} className={classes.instructionPaper}>
                                                    <Typography variant="h3" component="h3" className={classes.projectHeader}>
                                                        Spotify Search Application
                                                    </Typography>
                                                    <Typography variant="h5" className={classes.projectHeader}>
                                                        Instruction
                                                    </Typography>
                                                    <ul style={{ fontFamily: "helvetica, sans-serif, arial", fontSize: "16px" }}>
                                                        <li>This application let user to search either Artist or Album from Spotify</li>
                                                        <li style={{ marginTop: '5px' }}>When user clicks on either Artist or Album from the result will take user to either Artist or Album Page</li>
                                                        <li style={{ marginTop: '5px' }}>The detailed Artist information will be available with related Artists on Artist Page</li>
                                                        <li style={{ marginTop: '5px' }}>The detailed Album information will be available with Album track list on Album Page</li>
                                                        <li style={{ marginTop: '5px' }}>This application used public API from Spotify. For more information, please check <a href="https://developer.spotify.com/documentation/web-api/reference/" target="_blank" rel="noopener noreferrer">Spotify API Reference Website</a></li>
                                                    </ul>
                                                    <Typography variant="h5" component="h6" className={classes.projectHeader}>
                                                        Screenshots
                                                    </Typography>
                                                    <Grid item xs={4} className={classes.screenshot} onClick={() => handleImageOpen(spotify_01, "First")}>
                                                        <Paper className={classes.paper}>
                                                            <img src={spotify_01} alt="spotify_01" style={{ width: '80%', height: '80%' }} />
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={4} className={classes.screenshot} onClick={() => handleImageOpen(spotify_02, "Second")}>
                                                        <Paper className={classes.paper}>
                                                            <img src={spotify_02} alt="spotify_02" style={{ width: '80%', height: '80%' }} />
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={4} className={classes.screenshot} onClick={() => handleImageOpen(spotify_03, "Third")}>
                                                        <Paper className={classes.paper}>
                                                            <img src={spotify_03} alt="spotify_03" style={{ width: '80%', height: '80%' }} />
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={4} className={classes.screenshot} onClick={() => handleImageOpen(spotify_04, "Fourth")}>
                                                        <Paper className={classes.paper}>
                                                            <img src={spotify_04} alt="spotify_04" style={{ width: '80%', height: '80%' }} />
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={4} className={classes.screenshot} onClick={() => handleImageOpen(spotify_05, "Fifth")}>
                                                        <Paper className={classes.paper}>
                                                            <img src={spotify_05} alt="spotify_05" style={{ width: '80%', height: '80%' }} />
                                                        </Paper>
                                                    </Grid>
                                                    <Dialog
                                                        maxWidth="lg"
                                                        open={imgOpen.window}
                                                        TransitionComponent={Transition}
                                                        onClick={handleImageClose}
                                                        aria-labelledby="image"
                                                        style={{ width: '70%', margin: 'auto' }}
                                                    >
                                                        <DialogTitle>{imgOpen.order} Image</DialogTitle>
                                                        <DialogContent>
                                                            <img src={imgOpen.name} alt="spotify_zoomed" style={{ width: "100%", height: "100%", margin: 'auto' }} />
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={handleImageClose} color="primary">
                                                                Close
                                                            </Button>
                                                        </DialogActions>
                                                    </Dialog>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Dialog>
                                )
                            case 'rokemon':
                                return (
                                    <Dialog fullScreen open={open.window} onClose={handleClickClose} TransitionComponent={Transition}>
                                        <AppBar className={classes.appBar}>
                                            <Toolbar>
                                                <IconButton edge="start" color="inherit" onClick={handleClickClose} aria-label="Close">
                                                <CloseIcon />
                                                </IconButton>
                                                <Typography variant="h6" className={classes.title}>
                                                    Rokemon Encounter
                                                </Typography>
                                                <Button color="inherit" href="http://jungyup.github.io/wild_rokemon_encounter">
                                                    Demo Link
                                                </Button>
                                            </Toolbar>
                                        </AppBar>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} className={classes.container}>
                                                <Grid item xs={12} className={classes.instructionPaper}>
                                                    <Typography variant="h3" className={classes.projectHeader}>
                                                        Wild Rokemon Encounter
                                                    </Typography>
                                                    <Typography variant="h5" className={classes.projectHeader}>
                                                        Instruction
                                                    </Typography>
                                                    <ul style={{ fontFamily: "helvetica, sans-serif, arial", fontSize: "16px" }}>
                                                        <li>User starts on the center of the map, and can navigate to another tile with arrow keys.</li>
                                                        <li style={{ marginTop: '5px' }}>If there is no Rokemons on the tile, then "Nothing was Found" message will be shown in the message box at the top of the page.</li>
                                                        <li style={{ marginTop: '5px' }}>If there is Rokemons on the tile, then "You Found and Caught Rokemon" message will be shown in the message box and also the number for the Rokemon that user caught will increase.</li>
                                                        <li style={{ marginTop: '5px' }}>There are total 4 Rokemons on the map, and once the user find and catch all the Rokemons, then message alert will be shown and it will automatically reload the page.</li>
                                                        <li style={{ marginTop: '5px', fontWeight: 'bold' }}>The demo can be viewed in <a href="http://jungyup.github.io/wild_rokemon_encounter">here</a> or just simply press Demo Link button on the top right corner.</li>
                                                    </ul>
                                                    <Typography variant="h5" component="h6" className={classes.projectHeader}>
                                                        Screenshots
                                                    </Typography>
                                                    <Grid item xs={4} className={classes.screenshot} onClick={() => handleImageOpen(rokemon_01, "First")}>
                                                        <Paper className={classes.paper}>
                                                            <img src={rokemon_01} alt="rokemon_01" style={{ width: '80%', height: '80%' }} />
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={4} className={classes.screenshot} onClick={() => handleImageOpen(rokemon_02, "Second")}>
                                                        <Paper className={classes.paper}>
                                                            <img src={rokemon_02} alt="rokemon_02" style={{ width: '80%', height: '80%' }} />
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={4} className={classes.screenshot} onClick={() => handleImageOpen(rokemon_03, "Third")}>
                                                        <Paper className={classes.paper}>
                                                            <img src={rokemon_03} alt="rokemon_03" style={{ width: '80%', height: '80%' }} />
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={4} className={classes.screenshot} onClick={() => handleImageOpen(rokemon_04, "Fourth")}>
                                                        <Paper className={classes.paper}>
                                                            <img src={rokemon_04} alt="rokemon_04" style={{ width: '80%', height: '80%' }} />
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={4} className={classes.screenshot} onClick={() => handleImageOpen(rokemon_05, "Fifth")}>
                                                        <Paper className={classes.paper}>
                                                            <img src={rokemon_05} alt="rokemon_05" style={{ width: '80%', height: '80%' }} />
                                                        </Paper>
                                                    </Grid>
                                                        <Dialog
                                                            maxWidth="lg"
                                                            open={imgOpen.window}
                                                            TransitionComponent={Transition}
                                                            onClick={handleImageClose}
                                                            aria-labelledby="image"
                                                            style={{ width: '50%', margin: 'auto' }}
                                                        >
                                                            <DialogTitle>{imgOpen.order} Image</DialogTitle>
                                                            <DialogContent>
                                                                <img src={imgOpen.name} alt="rokemon_zoomed" style={{ width: "100%", height: "100%", margin: 'auto' }} />
                                                            </DialogContent>
                                                            <DialogActions>
                                                                <Button onClick={handleImageClose} color="primary">
                                                                    Close
                                                                </Button>
                                                            </DialogActions>
                                                        </Dialog>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Dialog>
                                )
                            default:
                                return null;
                        }
                    })()}
                </Grid>
            </Grid>
        </section>
    );
};

export default Projects;