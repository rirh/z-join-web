import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { useAxios } from 'src/api/axios';
import { Box, Typography, Button } from '@material-ui/core'
import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Layout from 'src/components/Layout/ZLayout';
// assets
import bannerBot from 'src/assets/images/banner_bot.jpeg'
import bannerLogo2 from 'src/assets/images/bannerlogo2.png'
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
  needPermission: boolean,
  myInviteCode?: string

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
  const [iso, setIso] = React.useState<iso>(initIos)
  const [, executeIso] = useAxios(param, { manual: true });

  const classes = useStyles();
  React.useEffect(() => {
    executeIso().then((res: AxiosResponse<iso>) => {
      setIso(res)
    })
  }, [executeIso])



  const bg_vedio = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-crypto2server/7c09c100-f1da-11ea-8a36-ebb87efcf8c0.mp4'
  // const kda_video = 'https://6372-crypto2server-576164-1302901174.tcb.qcloud.la/kda.mp4';
  return <Layout >
    <div className={`${classes.contant}`}>
      <div className={`${classes.imageWapper}`}>
        <img className={`${classes.imageWapperImageBot}`} src={bannerBot} alt="move bg" />
        <img className={`${classes.imageWapperImage}`} src={bannerLogo2} alt="move bg" />
      </div>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h2">定制服务、行业数据库、赋能生态之力</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="body1">商城小程序，公众号，APP开发，信任托付，起步价5W，开发完成，源码交付</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" paddingTop="18vh">
        <Button variant="contained" color="secondary" className={classes.sumbit}>现在开始</Button>
        <Button variant="contained" color="secondary" className={classes.sumbit}>联系我们</Button>
      </Box>
      <Typography className={`${classes.tips}`} variant="body2">{iso?.epoch ? moment(iso?.epoch).format('YYYY-MM-DD HH:mm:ss') : ''}</Typography>
      <Box display="flex" justifyContent="center" alignItems="center" paddingTop="18vh">
        <video className={`${classes.bgVideo}`} playsInline autoPlay muted loop src={bg_vedio}></video>
      </Box>
    </div>
    {/* <AppBar>
      <Toolbar>
        <Typography className={`${classes.logo}`} variant="h4">Z Join</Typography>
        <div className={`${classes.title}`}></div>
        <Button variant="contained" color="primary" onClick={() => setOpenDraw(true)} className={classes.account} >现在开始</Button>
      </Toolbar>

    </AppBar> */}

    <Box>
      {/* {!openDraw ? <video className={classes.kad_video} src={kda_video} autoPlay playsInline loop muted></video> : ''} */}
    </Box>
  </Layout>
}


const useStyles = makeStyles((theme: Theme) => createStyles({
  contant: {
    width: '100vw',
    backgroundColor: theme.palette.common.white
  },
  imageWapper: {
    width: '62%',
    /* height: auto; */
    color: '#fff',
    margin: '0 auto 60px',
    overflow: 'hidden',
    position: 'relative',
    marginTop: '200px',
    height: '150px'

  },
  imageWapperImage: {
    position: 'relative',
    width: '100%',
    left: '0',
    top: '0',
    zIndex: 10,
    height: '100%',
    objectFit: "fill"

  },
  imageWapperImageBot: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    top: '0',
    animation: '$intro-img-bg 40s linear infinite alternate'
  },
  sumbit: {
    height: '60px',
    width: '210px',
    fontWeight: 400,
    fontSize: '32px',
    backgroundColor: theme.palette.common.black,
    '&:last-child': {
      marginLeft: '3vw'
    }
  },
  bgVideo: {
    minHeight: '100vh',
    minWidth: '100vw',
    width: 'auto',
    height: 'auto',
    overflow: 'hidden',
    backgroundSize: 'cover',
  },
  tips: {
    color: theme.palette.common.black,
    position: 'absolute',
    right: '20px',
    bottom: '20px'
  },
  "@keyframes intro-img-bg": {
    from: {
      transform: 'translateY(-300px)'
    },
    to: {
      transform: 'translateY(-800px)'

    }
  }

}));
