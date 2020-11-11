import React from 'react'
import { Box, Snackbar, Slide, IconButton } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectAppSlice } from 'src/redux/slices/appSlice'
import { SlideProps } from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import { updateMessage } from 'src/redux/slices/appSlice'

type TransitionProps = Omit<SlideProps, 'direction'>;


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
  }),
);


const Snackbars = () => {
  const { snackBar: { open, message } } = useSelector(selectAppSlice)
  const dispatch = useDispatch()
  const classes = useStyles();
  const handleDispatchSnackbar = React.useCallback(() => dispatch(updateMessage({
    open: false,
    message: ''
  })), [dispatch])

  return (<Box>
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      className={classes.close}
      open={open}
      onClose={handleDispatchSnackbar}
      TransitionComponent={(props: TransitionProps) => <Slide {...props} direction="right"></Slide>}
      message={message}
      action={
        <React.Fragment>
          <IconButton
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleDispatchSnackbar}
          >
            <CloseIcon />
          </IconButton>
        </React.Fragment>
      }
    />
  </Box>)


}

export default Snackbars;
