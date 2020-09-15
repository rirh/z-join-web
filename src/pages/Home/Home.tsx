import React, { FunctionComponent } from 'react';
import service from 'src/api/axios';
import { Box, Typography } from '@material-ui/core'
import { AxiosResponse } from 'axios'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import moment from 'moment';
interface iso {
    epoch?: string
    iso?: string
    [propName: string]: any;
}

export const HOME_PAGE_URL = '/';
const url = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-crypto2server/7c09c100-f1da-11ea-8a36-ebb87efcf8c0.mp4'

export const Home: FunctionComponent = (props: any) => {
    const [iso, setIso] = React.useState<iso>({
        epoch: '',
        iso: ''
    })
    const classes = useStyles();
    React.useEffect(() => {
        const param: any = {
            url: "/iso",
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
        }
        service(param).then((res: AxiosResponse<iso>) => {
            setIso(res)
        })
    }, [])
    return <Box className={`${classes.root}`} >
        <Typography className={`${classes.tips}`} variant="h4">{moment(iso?.epoch).format('YYYY-MM-DD HH:mm:ss')}</Typography>
        <video className={`${classes.bgVideo}`} playsInline autoPlay muted loop src={url}></video>
    </Box>
}


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        margin: theme.spacing(0),
        display: 'grid',
        placeItems: 'center',
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
        width:'auto',
        height:'auto',
        overflow: 'hidden',
        backgroundSize: 'cover',

    },
    tips: {
        color: theme.palette.common.white,
        margin: theme.spacing(1),
        fontFamily: "'Courier New', Courier, monospace",

    }

}));