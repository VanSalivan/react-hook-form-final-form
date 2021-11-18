import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@material-ui/core';

import MainContainer from '../../components/componentsUI/MainContainer';
import FormUI from '../../components/componentsUI/FormUI';
import { InputUI } from '../../components/componentsUI/InputUI/InputUI';
import PrimatyButton from '../../components/componentsUI/PrimaryButton';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field'),
});

const StepOne = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        Step 1
      </Typography>
      <FormUI onSubmit={handleSubmit(onSubmit)}>
        <InputUI
          {...register('firstName')}
          id='firstName'
          label='First Name'
          name='firstName'
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <InputUI
          {...register('lastName')}
          id='lastName'
          label='Last Name'
          name='lastName'
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />

        <PrimatyButton>Next</PrimatyButton>
      </FormUI>
    </MainContainer>
  );
};

export { StepOne };
