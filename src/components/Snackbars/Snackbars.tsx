import React from 'react'
import { Box, Snackbar, Slide } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectAppSlice } from 'src/redux/slices/appSlice'
import { SlideProps } from '@material-ui/core/Slide';

type TransitionProps = Omit<SlideProps, 'direction'>;


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
  }),
);


const Snackbars = () => {
  const { open, message, ...other } = useSelector(selectAppSlice)
  const dispatch = useDispatch()
  const classes = useStyles();
  const handleDispatchSnackbar = React.useCallback(() => dispatch({
    type: 'updateMessage', payload: {
      open: false, message, ...other
    }
  }), [dispatch, message, other])

  return (<Box>
    <Snackbar
      className={classes.close}
      open={open}
      onClose={handleDispatchSnackbar}
      TransitionComponent={(props: TransitionProps) => <Slide {...props} direction="right"></Slide>}
      message={message}
    />
  </Box>)


}

export default Snackbars;
