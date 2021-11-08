import React from 'react';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { SignUpPage } from 'pages/SignUpPage';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='login/*' element={<LoginPage />} />
      <Route path='signup/*' element={<SignUpPage />} />
    </Routes>
  );
}


