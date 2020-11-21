
import React from 'react';
import { Box, Typography, Button, Drawer, TextField, CircularProgress, } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { updateMessage } from 'src/redux/slices/appSlice'
import { useAxios } from 'src/api/axios';
import { AxiosResponse } from 'axios'

interface User {
    username: string
    password: string
    cpassword: string
    action: string
    needPermission: boolean,
    myInviteCode?: string

}
interface DrawType {
    open: boolean,
    onClose: any
}
const initUser: User = {
    username: '',
    password: '',
    cpassword: '',
    needPermission: true,
    myInviteCode: '',
    action: 'register',
}

const ZDrawer: React.FC<DrawType> = ({ open, onClose }: any) => {

    const [user, setUser] = React.useState<User>(initUser)
    const [{ loading: authLoading }, executeAuth] = useAxios({
        url: '/user-center',
        method: 'post'
    }, { manual: true });

    const dispatch = useDispatch();
    const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [evt.target.id || evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();
        // if (user.password !== user.cpassword) {
        //     alert('Password is not match');
        //     return;
        // }
        executeAuth({
            data: user
        }).then((res: AxiosResponse<{
            code: number,
            msg: string
        }>) => {
            if ((res as any).code === 0) {
                setUser(initUser)
            }
            dispatch(updateMessage({
                open: true,
                message: (res as any).msg
            }))
        })
    }
    const classes = useStyles();
    return <Drawer anchor='right' open={open} onClose={onClose} >
        <Box className={classes.drawer} >
            <Typography className={classes.logintitle} variant="h5" >REGIST</Typography>
            <form onSubmit={handleSubmit}>
                <Box marginTop="30px" className={classes.textWapper} >
                    <TextField required value={user.username} onChange={handleInput} size="small" fullWidth color="secondary" variant="outlined" id="username" label="User name" />
                </Box>
                <br />
                <Box className={classes.textWapper}>
                    <TextField value={user.password} required onChange={handleInput} size="small" fullWidth type="password" color="secondary" variant="outlined" id="password" label="Password" />
                </Box>
                {/* <br />
                <Box className={classes.textWapper}>
                    <TextField value={user.cpassword} required onChange={handleInput} size="small" fullWidth type="password" color="secondary" variant="outlined" id="cpassword" label="Confirm password" />
                </Box> */}
                <br />
                {/* <Box className={classes.textWapper}>
                    <TextField value={user.myInviteCode} onChange={handleInput} size="small" fullWidth color="secondary" variant="outlined" id="myInviteCode" label="MyInviteCode" />
                </Box> */}
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
}


const useStyles = makeStyles((theme: Theme) => createStyles({
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
            animation: 'orange 1.5s ease-in-out infinite alternate'
        }
    },
    account: {
        height: '40px',
        color: theme.palette.common.black,

    },
    tips: {
        color: theme.palette.common.black,
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
    textWapper: {

    },
    logintitle: {
        fontWeight: 'bold',
        fontFamily: "'Courier New', Courier, monospace",

    },
}));

export default ZDrawer;