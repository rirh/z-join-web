import React, { PropsWithChildren } from 'react'
import { Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const url = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-crypto2server/7c09c100-f1da-11ea-8a36-ebb87efcf8c0.mp4'
export default (props: PropsWithChildren<any>) => {
    const classes = useStyles();
    return <Box className={`${classes.root}`} >
        <video className={`${classes.bgVideo}`} playsInline autoPlay muted loop src={url}></video>
        {props.children}
    </Box>
}
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        margin: theme.spacing(0),
        // display: 'grid',
        // placeItems: 'center',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden'
    },
    bgVideo: {
        position: 'absolute',
        top: 0,
        zIndex: -1,
        minHeight: '100vh',
        minWidth: '100vw',
        width: 'auto',
        height: 'auto',
        overflow: 'hidden',
        backgroundSize: 'cover',

    },
}))