import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TableContainer,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import Swal from 'sweetalert2';
import Confetti from 'react-confetti';

import { useData } from '../../DataContext';
import MainContainer from '../../components/componentsUI/MainContainer';
import PrimatyButton from '../../components/componentsUI/PrimaryButton';
import { InsertDriveFile } from '@material-ui/icons';

const useStyles = makeStyles({
  table: {
    marginBottom: '30px',
  },
  list: {
    width: '100%',
  },
});

const FormResult = () => {
  const [success, setSuccess] = useState(false);
  const styles = useStyles();
  const { data } = useData();

  const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
  const { files } = data;

  const onSubmit = async () => {
    const formData = new FormData();
    if (data.files) {
      data.files.forEach((file) => {
        formData.append('files', file, file.name);
      });
    }

    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    const res = await fetch('http://localhost:3000/', {
      method: 'POST',
      body: formData,
    });

    setSuccess(true);
    Swal.fire(
      'Great job!',
      'You send a form! Though there is no bek for it =(',
      'success'
    );
  };

  if (success) {
    return (
      <>
        <Confetti />
        <MainContainer>
          <Link to='/'>Start over</Link>
        </MainContainer>
      </>
    );
  }

  return (
    <>
      <MainContainer>
        <Typography component='h2' variant='h5'>
          Form Values
        </Typography>
        <TableContainer className={styles.table} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell align='right'>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map(
                (entry) =>
                  entry[1] && (
                    <TableRow key={entry[0]}>
                      <TableCell>{entry[0]}</TableCell>
                      <TableCell align='right'>{entry[1]}</TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {files && (
          <>
            <Typography component='h2' variant='h5'>
              Files
            </Typography>
            <List className={styles.list}>
              {files.map((file, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={file.name} secondary={file.size} />
                </ListItem>
              ))}
            </List>
          </>
        )}
        <PrimatyButton onClick={onSubmit}>Submit</PrimatyButton>
        <Link to='/'>Start over</Link>
      </MainContainer>
    </>
  );
};

export { FormResult };
