import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'


export const DISPATCH_PAGE_URL = '/dispatch';

export const Dispatch = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h2>talk about anim</h2>
      <p className={classes.text}>The Caterpillar and Alice looked at each other for some time in silence:
      at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
    </div>)
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    margin: theme.spacing(2),
    display: 'grid',
    // placeItems: 'center'
  },
  text: {
    animationDuration: '4s',
    animationName: '$slidein',
    animationDirection: "alternate",
    animationIterationCount: 'infinite',

  },
  "@keyframes slidein": {
    '0%': {
      // marginLeft: '100%',
      // width: '300%',
      // transform: 'rotateX(-0deg)',
      // perspective: 0,
      transform: 'rotateX(-0deg)'
    },
    // '10%': {
    //   marginLeft: '0%',
    //   width: '100%',
    // },
    // '20%': {
    //   transform: 'rotateX(-0deg)'
    // },
    // '30%': {
    //   transform: 'rotateX(360deg)'
    // },
    // '40%': {
    //   transform: 'rotateY(-0deg)'
    // },
    // '50%': {
    //   transform: 'rotateY(360deg)'
    // },
    // '60%': {
    //   transform: 'rotateZ(-0deg)'
    // },
    // '70%': {
    //   transform: 'rotateZ(360deg)'
    // },
    // '80%': {

    // },
    // '90%': {

    // },
    '100%': {
      // transform: 'rotateX(360deg)'
      perspective: 1000,
      transform: 'rotateX(360deg)'
    },



  }
}))

