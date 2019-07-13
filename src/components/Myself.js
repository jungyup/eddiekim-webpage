import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import '../styles/Myself.scss';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#fff'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    headText: {
        color: '#979597',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    eduText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    gridProfile: {

    },
    gridMyself: {
        padding: 10,
        textAlign: 'center',
        margin: 'auto'
    },
    gridEducation: {
        textAlign: 'center',
        margin: 'auto',
        backgroundColor: '#5d7294'
    },
    gridExperience: {
        padding: 10,
        margin: 'auto',
        backgroundColor: '#fff'
    },
    gridTrivia: {
        padding: 10,
        margin: 'auto',
        backgroundColor: '#5d7294'
    },
    eduDiv: {
        paddingTop: 30,
        float: 'left',
        width: '100%',
        marginTop: 30,
        marginBottom: 30
    },
    eduInfo: {
        color: '#fff',
        font: 'arial helvetica sans-serif'
    },
    companyLogo: {
        marginTop: 30,
        paddingTop: 30,
        float: 'left',
        width: '100%',
        textAlign: 'center'
    },
    companyDetail: {
        marginTop: 30,
        paddingTop: 30,
        paddingLeft: 10,
        float: 'left',
        width: '50%',
        color: '#979597',
        textAlign: 'left'
    },
    spacer: {
        height: 70,
        backgroundColor: '#fff'
    },
    skillList: {
        width: '80%',
        margin: 'auto'
    },
    skillListItem: {
        width: '50%',
        float: 'left',
        color: '#fff'
    },
    inline: {
        display: 'inline',
        color: '#fff'
    }
}));

const Myself = () => {
    const classes = useStyles();

    return (
        <section id="myself" className={classes.root}>
            <Grid container spacing={3}>
                <Grid xs={12} className={classes.spacer}></Grid>
                <Grid id="about" item xs={12} className={classes.gridMyself}>
                    <Typography variant="h3" className={classes.headText} gutterBottom>
                        Eddie Kim
                    </Typography>
                    <Typography vairant="p" className={classes.headText} gutterBottom>
                        Front End Developer
                    </Typography>
                    <div className="col-md-5 col-sm-5 col-xs-12">
                        <div className="row section-success ourTeam-box text-center">
                            <div className="col-md-12 section1">
                                <img alt="myself" src="https://ojnsng.files.wordpress.com/2017/03/7a2d2b4469bb7b9be6d3627ce502d106.gif" />
                            </div>
                            <div className="col-md-12 section2">
                                <p>Eddie</p><br />
                                <h1>Front End Developer</h1><br />
                            </div>
                            <div className="col-md-12 section3">
                                <p>
                                I am a Front End / Web Developer with industry experience building and maintaining website and web application. 
                                I specialized in JavaScript and have professional experience working with HTML, CSS and React. 
                                I am truly passionate about my work and always eager to learn new things and connect with others. 
                                I am currently freelancing while I pursue new opportunity and can be reached either this profile or email at jungyupkim4@gmail.com. 
                                </p>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} className={classes.spacer} style={{ backgroundColor: '#5d7294', marginTop: '30px' }}></Grid>
                <Grid id="education" item xs={12} className={classes.gridEducation}>
                    <Typography variant="h3" className={classes.eduText} gutterBottom>
                        Where I Studied Programming..
                    </Typography>
                    <Grid xs={5} className={classes.eduDiv}>
                        <img id="eduImg" src="http://sunarchives.sheridanc.on.ca/wp-content/uploads/2013/09/Sheridan-Get-Creative-banner.jpg" alt="Sheridan College" />
                    </Grid>
                    <Grid xs={7} className={classes.eduDiv}>
                        <Typography variant="h6" className={classes.eduInfo} gutterBottom>
                            Sheridan College for Software Development & Network Engineering <br/>
                            Advanced Diploma Program
                        </Typography><br/>
                        <Typography variant="body1" className={classes.eduInfo} gutterBottom>
                            Sep.2014 ~ Aug.2018
                        </Typography>
                        <List className={classes.skillList}>
                            <ListItem alignItems="flex-start" className={classes.skillListItem}>
                                <ListItemAvatar>
                                    <Avatar alt="oop" src="https://i.pinimg.com/originals/45/03/98/450398f4ff10d0253602b6a6d99419ed.png" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Object Orient Programming/Framework"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                            >
                                                Java, C#, .NET, Spring
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start" className={classes.skillListItem}>
                                <ListItemAvatar>
                                    <Avatar alt="web" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVGqij5RvSOeO1nMpx10hKa0m765lIr_y3rU1TRihdvwJT2p4wg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Web Programming Languages/Library"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                JavaScript, React, HTML5, CSS3
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Grid xs={12} className={classes.spacer}></Grid>
                <Grid id="experience" item xs={12} className={classes.gridExperience}>
                    <Typography variant="h3" className={classes.headText} gutterBottom>
                        Where I worked..
                    </Typography>
                    <Grid xs={5} className={classes.companyLogo}>
                        <img id="companyImg" alt="pinnaca" src="https://i.channeldailynews.com/wp-content/uploads/2016/09/Pinnaca-logo.jpg" />
                    </Grid>
                    <Grid xs={7} className={classes.companyDetail}>
                        <Typography variant="h6" className={classes.eduInfo} gutterBottom>
                            Pinnaca as Web Developer
                        </Typography>
                        <Typography variant="p" style={{ float: 'right', fontStyle: 'sans-serif arial helvetica', fontWeight: 'bold' }}>
                            May.2017 – Sep.2017
                        </Typography><br/><br/>
                        <Typography variant="p" className={classes.companyExp} gutterBottom>
                            •	Responsible for the primary development of Pinnaca Angular Applications, utilizing RESTful API endpoints for customers such as Vodafone and the FCO
                            <br/>•	Debug and update with enhancement for Pinnaca Angular Applications 
                            <br/>•	Using Slack for global team-communication and SVN for version controlling and GitLab for managing projects and issues to meet their deadlines
                            <br/>•	Create Application Technical Documentation with testing instruction, detailed information of each functions and which API used with it
                        </Typography>
                    </Grid>
                    <Grid xs={5} className={classes.companyLogo}>
                        <img id="companyImg" alt="pinnaca" src="https://upload.wikimedia.org/wikipedia/commons/c/cb/NYGH-50th-anniversary-logo.jpg" />
                    </Grid>
                    <Grid xs={7} className={classes.companyDetail}>
                        <Typography variant="h6" className={classes.eduInfo} gutterBottom>
                            North York General Hospital as Mobile Application Developer
                        </Typography>
                        <Typography variant="p" style={{ float: 'right', fontStyle: 'sans-serif arial helvetica', fontWeight: 'bold' }}>
                            Jan.2016 - Apr.2016 | Aug.2016 - Jan.2017
                        </Typography><br/><br/>
                        <Typography variant="p" className={classes.companyExp} gutterBottom>
                            •	Built REST Web API to register the number of people as data in SQL Server, and retrieve the data from SQL server to show on a mobile application
                            <br/>•	Built and released an iOS IPA and an Android APK to iTunes Connect and Google Play as public and test version, respectively
                            <br/>•	Utilized SharePoint Designer with HTML5, CSS and JavaScript to create a SharePoint website for Critical Care Unit department 
                        </Typography>
                    </Grid>
                </Grid>
                <Grid xs={12} className={classes.spacer}></Grid>
                <Grid id="trivia" item xs={12} className={classes.gridTrivia}>
                    <Typography variant="h3" className={classes.eduText} gutterBottom>
                        Trivia
                    </Typography>
                    
                </Grid>
                <Grid xs={12} className={classes.spacer}></Grid>
            </Grid>
        </section>
    );
}

export default Myself;