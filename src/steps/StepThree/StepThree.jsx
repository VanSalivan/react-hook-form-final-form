import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '@material-ui/core';

import { useData } from '../../DataContext';
import MainContainer from '../../components/componentsUI/MainContainer';
import FormUI from '../../components/componentsUI/FormUI';
import PrimatyButton from '../../components/componentsUI/PrimaryButton';
import { FileDropInput } from '../../components/FileDropInput/FileDropInput';
import { useNavigate } from 'react-router';

const StepThree = () => {
  const navigate = useNavigate();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setValues(data);
    navigate('/result');
  };

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        Step 3
      </Typography>
      <FormUI onSubmit={handleSubmit(onSubmit)}>
        <FileDropInput name='files' control={control} />
        <PrimatyButton>Next</PrimatyButton>
      </FormUI>
    </MainContainer>
  );
};

export { StepThree };
