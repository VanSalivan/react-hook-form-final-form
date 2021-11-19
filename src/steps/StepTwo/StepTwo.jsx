import React from 'react';
import { useNavigate } from 'react-router';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { parsePhoneNumberFromString } from 'libphonenumber-js'

import MainContainer from '../../components/componentsUI/MainContainer';
import FormUI from '../../components/componentsUI/FormUI';
import { InputUI } from '../../components/componentsUI/InputUI/InputUI';
import PrimatyButton from '../../components/componentsUI/PrimaryButton';


const schema = yup.object().shape({
  email: yup.string().email("Email should correct format").required("Email is required field")
});

const StepTwo = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors }} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const hasPhone = watch('hasPhone');

  const onSubmit = (data) => {
    console.log(data)
    navigate('/step3');
  };


  const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);

    if (!phoneNumber) {
      return value;
    }

    return phoneNumber.formatInternational()
  };

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>Step 2</Typography>
      <FormUI onSubmit={handleSubmit(onSubmit)}>
        <InputUI
          {...register('email')}
          type='email'
          id='email'
          label='Email'
          name='email'
          error={!!errors.email}
          helperText={errors?.email?.message}
        />

        <FormControlLabel
          label='Do you have a phone'
          control={
            <Checkbox
              {...register('hasPhone')}
              name='hasPhone'
              color='primary'
            />
          }
        />

        {
          hasPhone && (
            <InputUI
              {...register('tel')}
              id="phoneNumber"
              type='tel'
              label='Phone number'
              name='phoneNumber'
              onChange={(event) => {
                event.target.value = normalizePhoneNumber(event.target.value)
              }}
            />
          )
        }
        <PrimatyButton>Next</PrimatyButton>
      </FormUI>
    </MainContainer>
  );
};

export { StepTwo };
