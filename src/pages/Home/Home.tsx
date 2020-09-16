import React, { FunctionComponent } from 'react';
import { useAxios } from 'src/api/axios';
import { Box, Typography, Button, Drawer, TextField, CircularProgress } from '@material-ui/core'
import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import moment from 'moment';
import Layout from 'src/components/Layout/ZLayout';
interface iso {
    epoch?: string
    iso?: string
    [propName: string]: any;
}
interface User {
    username: string
    password: string
    action: string
    myInviteCode?: string

}
const initUser: User = {
    username: '',
    password: '',
    myInviteCode: '',
    action: 'register',
}
const param: AxiosRequestConfig = {
    url: "/iso",
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
}
const initIos: iso = {
    epoch: '',
    iso: ''
}

export const HOME_PAGE_URL = '/';

export const Home: FunctionComponent = (props: any) => {
    const [openDraw, setOpenDraw] = React.useState<boolean>(true);
    const [user, setUser] = React.useState<User>(initUser);
    const [iso, setIso] = React.useState<iso>(initIos)
    const [, executeIso] = useAxios(param, { manual: true });
    const [{ loading: authLoading }, executeAuth] = useAxios({
        url: '/auth',
        method: 'post'
    }, { manual: true });

    const classes = useStyles();
    React.useEffect(() => {
        executeIso().then((res: AxiosResponse<iso>) => {
            setIso(res)
        })
    }, [executeIso])
    const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [evt.target.id || evt.target.name]: evt.target.value
        })
    }
    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();
        executeAuth({
            data: user
        }).then((res: AxiosResponse<any>) => {
            console.log(res)
        })
    }
    const renderDarew = <Drawer anchor='right' open={openDraw} onClose={() => setOpenDraw(false)} >
        <Box className={classes.drawer} >
            <Typography className={classes.logintitle} variant="h5" >LOGIN/REGIST</Typography>
            <form onSubmit={handleSubmit}>
                <Box marginTop="30px" className={classes.textWapper} >
                    <TextField value={user.username} onChange={handleInput} size="small" fullWidth color="secondary" variant="outlined" id="username" label="USER" />
                </Box>
                <br />
                <Box className={classes.textWapper}>
                    <TextField value={user.password} onChange={handleInput} size="small" fullWidth type="password" color="secondary" variant="outlined" id="password" label="PASSWORD" />
                </Box>
                <br />
                <Box className={classes.textWapper}>
                    <TextField value={user.myInviteCode} onChange={handleInput} size="small" fullWidth color="secondary" variant="outlined" id="myInviteCode" label="MyInviteCode" />
                </Box>
                <Box marginTop="30px">
                    <Button type="submit" fullWidth color="secondary" variant="contained">
                        {authLoading ? (
                            <CircularProgress size="1.1rem" color="primary" />
                        ) : 'Submit'}
                    </Button>
                </Box>
            </form>
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
        padding: '40px 50px',
        width: '35vw'
    },
    logintitle: {
        fontWeight: 'bold',
        fontFamily: "'Courier New', Courier, monospace",

    },
    textWapper: {

    }
}));