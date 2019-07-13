import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      overflow: 'auto'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#fff',
      boxShadow: 'none',
      backgroundColor: 'transparent'
    },
    gridItem: {
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg")`,
        backgroundSize: 'cover',
        height: '800px'
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <section id="home" className={classes.root}>
            <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.gridItem}>
                        <Paper className={classes.paper} style={{ float: 'right' }}>
                            <Typography variant="h2" color="#fff" gutterBottom>
                                Eddie Kim Webpage
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
        </section>
    );
}

export default Home;