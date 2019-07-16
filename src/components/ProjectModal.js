// Currently this component is not being used!!

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { Dialog, Toolbar, AppBar, Button } from '@material-ui/core'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectModal = props => {
    console.log(props);
    const classes = useStyles();
    const [open, setOpen] = React.useState(props.open);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClickClose() {
        setOpen(false);
    }

    return (
        <Dialog fullScreen open={open} onClose={handleClickClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClickClose} aria-label="Close">
                    <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Sound
                    </Typography>
                </Toolbar>
            </AppBar>
        </Dialog>
    );
}

export default ProjectModal;