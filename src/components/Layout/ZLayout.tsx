import React, { PropsWithChildren } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Snackbars from 'src/components/Snackbars/Snackbars'
import ZAppBars from 'src/components/AppBar/AppBar'
import ZFooter from 'src/components/Footer/Footer'
export interface LayoutProps { }
export default (props: PropsWithChildren<LayoutProps>) => {
  const classes = useStyles();
  return <div className={`${classes.root}`} >
    <ZAppBars></ZAppBars>
    {props.children}
    <ZFooter />
    <Snackbars />

  </div>
}
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    margin: theme.spacing(0),
    // display: 'grid',
    // placeItems: 'center',
    // height: '100vh',
    width: '100vw',
    // overflow: 'hidden'
    background: theme.palette.common.white
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
