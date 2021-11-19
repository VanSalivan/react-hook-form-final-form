import React from 'react';
import { Route, Routes } from 'react-router';

import Header from './components/Header';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import FormResult from './steps/FormResult';

function App() {
  return (
    <>
      <Header />
      <Routes path='/' >
        <Route index element={<StepOne />} />
        <Route path="step2" element={<StepTwo />} />
        <Route path="step3" element={<StepThree />} />
        <Route path="result" element={<FormResult />} />
      </Routes>
    </>
  );
}

export default App;
