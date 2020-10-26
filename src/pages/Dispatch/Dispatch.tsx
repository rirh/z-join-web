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
    placeItems: 'center'
  },
  text: {
    animationDuration: '3s',
    animationName: '$slidein'
  },
  "@keyframes slidein": {
    from: {
      marginLeft: '100%',
      width: '300%'
    },
    to: {
      marginLeft: '0%',
      width: '100%'
    }
  }
}))

