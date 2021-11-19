import React from 'react';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';
import { CloudUpload, InsertDriveFile } from '@material-ui/icons';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
    marginTop: '20px',
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#eee',
    cursor: 'pointer',
  },
  icon: {
    marginTop: '16px',
    color: '#888',
    fontSize: '42px',
  },
}));

const FileDropInput = ({ control, name }) => {
  const styles = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                className={styles.root}
                variant='outlined'
                {...getRootProps()}
              >
                <CloudUpload className={styles.icon} />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((file, index) => (
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
    />
  );
};

export { FileDropInput };
