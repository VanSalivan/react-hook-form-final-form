import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PrimatyButton = ({ children, props }) => {
  const styles = useStyles();

  return (
    <Button
      className={styles.root}
      type='submit'
      fullWidth
      variant='contained'
      color='primary'
      {...props}
    >
      {children}
    </Button>
  );
};

export { PrimatyButton };
