import { Helmet, HelmetProvider } from 'react-helmet-async';
import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </HelmetProvider>
  );
};

export default Login;
