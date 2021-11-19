import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PrimatyButton = ({ children, props, onClick }) => {
  const styles = useStyles();

  return (
    <Button
      onClick={onClick}
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
