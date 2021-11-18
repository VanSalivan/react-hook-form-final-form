import React from 'react';
import { Route, Routes } from 'react-router';

import Header from './components/Header';
import StepOne from './steps/stepOne';

import { useData } from './DataContext';

const Step2 = () => <>Step2</>
const Step3 = () => <>Step3</>
const Result = () => <>Step4</>


function App() {
  return (
    <>
      <Header />
      <Routes path='/' >
        <Route index element={<StepOne />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
