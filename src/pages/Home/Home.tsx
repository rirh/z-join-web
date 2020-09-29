import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { useAxios } from 'src/api/axios';
import { Box, Typography, Button, Drawer, TextField, CircularProgress } from '@material-ui/core'
import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Layout from 'src/components/Layout/ZLayout';
// import { Formik } from 'formik'
// import * as yup from 'yup'


interface iso {
  epoch?: string
  iso?: string
  [propName: string]: any;
}
interface User {
  username: string
  password: string
  cpassword: string
  action: string
  myInviteCode?: string

}
const initUser: User = {
  username: '',
  password: '',
  cpassword: '',
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
    // if (user.password !== user.cpassword) {
    //     alert('Password is not match');
    //     return;
    // }
    executeAuth({
      data: user
    }).then((res: AxiosResponse<any>) => {
      console.log(res)
      alert(JSON.stringify(res))
    })
  }

  const renderDarew = <Drawer anchor='right' open={openDraw} onClose={() => setOpenDraw(false)} >
    <Box className={classes.drawer} >
      <Typography className={classes.logintitle} variant="h5" >LOGIN/REGIST</Typography>
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
  const kda_video = 'https://6372-crypto2server-576164-1302901174.tcb.qcloud.la/kda.mp4';

  return <Layout >
    <Box display="flex" justifyContent="space-between" alignItems="center" margin="1vw" >
      <Typography className={`${classes.title}`} variant="h4">Z Join</Typography>
      <Button onClick={() => setOpenDraw(true)} className={classes.account} color="primary" >Account</Button>
    </Box>
    <Box>
      {!openDraw ? <video className={classes.kad_video} src={kda_video} autoPlay playsInline loop muted></video> : ''}
    </Box>
    <Typography className={`${classes.tips}`} variant="body2">{iso?.epoch ? moment(iso?.epoch).format('YYYY-MM-DD HH:mm:ss') : ''}</Typography>
    {renderDarew}
  </Layout>
}


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(0),
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    backgroundColor: '#000'
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
  kad_video: {
    height: '60vh',
    width: '70vw',
    objectFit: 'none',
    marginLeft: '15vw'
  },
  title: {
    color: theme.palette.common.white,
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
  "@keyframes orange": {
    to: {
      textShadow: ` 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
        0 0 40px #ff5722, 0 0 70px #ff5722, 0 0 80px #ff5722,
        0 0 100px #ff5722, 0 0 150px #ff5722`
    },
    from: {
      filter: 'brightness(110 %)',
      textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff,
      0 0 20px #ff5722, 0 0 35px #ff5722, 0 0 40px #ff5722,
      0 0 50px #ff5722, 0 0 75px #ff5722`
    }
  }
  ,
  textWapper: {


  }
}));
