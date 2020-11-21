import React, { FunctionComponent } from 'react';
import { Typography, Button, AppBar, Toolbar } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import ZDrawer from './ZDrawer'


function HideOnScroll(props: any) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const AppBars: FunctionComponent = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)
    const handleOpenDrawer = () => {
        setOpen(true)
    }
    return (<div className={`${classes.root}`}>
        <HideOnScroll {...props}>
            <AppBar className={classes.appbar} >
                <Toolbar>
                    <div>
                        <Typography className={`${classes.logo}`} variant="h4">Z Join</Typography>
                    </div>
                    <div className={`${classes.title}`}></div>
                    <div>
                        <Button variant="contained" color="primary" onClick={handleOpenDrawer} className={classes.profile} >现在开始</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
        <ZDrawer open={open} onClose={() => setOpen(false)} />
    </div>)
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        margin: theme.spacing(0)
    },
    appbar: {
        boxShadow: 'none',
        marginBottom: ''
    },
    title: {
        flex: 1
    },
    logo: {
        color: theme.palette.common.black,
        margin: theme.spacing(1),
        fontFamily: "'Courier New', Courier, monospace",
        fontWeight: 'bold',
        fontSize: '38px',
        cursor: 'pointer',
        textShadow: '2px 4px 8px 2px rgba(255, 255, 255, 1)',
        "&:hover": {
            // animation: '$orange 1.5s ease-in-out infinite alternate',
        }
    },
    profile: {
        height: '40px',
        color: theme.palette.common.black,

    },
    "@keyframes orange": {
        from: {
            textShadow: ` 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
            0 0 40px #ff5722, 0 0 70px #ff5722, 0 0 80px #ff5722,
            0 0 100px #ff5722, 0 0 150px #ff5722`
        },
        to: {
            filter: 'brightness(110 %)',
            textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff,
          0 0 20px #ff5722, 0 0 35px #ff5722, 0 0 40px #ff5722,
          0 0 50px #ff5722, 0 0 75px #ff5722`
        }
    }
}));

export default AppBars;