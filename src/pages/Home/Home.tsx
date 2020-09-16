import React, { FunctionComponent } from 'react';
import service from 'src/api/axios';
import { Box, Typography, Button, Drawer, TextField } from '@material-ui/core'
import { AxiosResponse } from 'axios'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import moment from 'moment';
import Layout from 'src/components/Layout/ZLayout';
interface iso {
    epoch?: string
    iso?: string
    [propName: string]: any;
}

export const HOME_PAGE_URL = '/';

export const Home: FunctionComponent = (props: any) => {
    const [openDraw, setOpenDraw] = React.useState<boolean>(false);
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

    const renderDarew = <Drawer anchor='right' open={openDraw} onClose={() => setOpenDraw(false)} >
        <Box className={classes.drawer} >
            <Box>
                <TextField color="secondary" id="standard-basic" label="Standard" />
            </Box>
            <br/>
            <Box>
                <TextField color="secondary" id="standard-basic" label="Standard" />
            </Box>
        </Box>
    </Drawer>
    return <Layout >
        <Box display="flex" justifyContent="space-between" alignItems="center" margin="1vw" >
            <Typography className={`${classes.title}`} variant="h4">Z Join</Typography>
            <Button onClick={() => setOpenDraw(true)} className={classes.account} color="primary" >Account</Button>
        </Box>
        <Typography className={`${classes.tips}`} variant="body2">{iso?.epoch ? moment(iso?.epoch).format('YYYY-MM-DD HH:mm:ss') : ''}</Typography>
        {renderDarew}
    </Layout>
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
        width: 'auto',
        height: 'auto',
        overflow: 'hidden',
        backgroundSize: 'cover',

    },
    title: {
        color: theme.palette.common.white,
        margin: theme.spacing(1),
        fontFamily: "'Courier New', Courier, monospace",
        fontWeight: 'bold',
        fontSize: '38px',
        cursor: 'pointer'
    },
    account: {
        height: '40px',

    },
    tips: {
        color: theme.palette.common.white,
        margin: theme.spacing(1),
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: '18px',
        position: 'fixed',
        bottom: 0,
        right: 0
    },
    drawer: {
        padding: '1vw 4vw'
    }
}));