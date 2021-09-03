import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../../pages/Accounts/Register';
import SignIn from '../../pages/Accounts/SignIn';
import PasswordForgot from '../../pages/Accounts/PasswordForgot';
import PasswordReset from '../../pages/Accounts/PasswordReset';
import { Container, FormsContainer } from '../../components/styles';
import NotFound from '../../pages/Error/404';

const AccountsRoutes = () => {
  return (
    <Container>
      <FormsContainer>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/password-forgot" element={<PasswordForgot/>}/>
          <Route path="/password-reset" element={<PasswordReset/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </FormsContainer>
    </Container>
  )
};

export default AccountsRoutes;
