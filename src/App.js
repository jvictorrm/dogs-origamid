import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import AccountsRoutes from './routes/AccountsRoutes';
import { AuthStorage } from './contexts/AuthContext';
import UserRoutes from './routes/UsersRoutes';
import ProtectedRoute from './routes/components/ProtectedRoute';
import PhotoRoutes from './routes/PhotoRoutes';
import NotFound from './pages/Error/404';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthStorage>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="accounts/*" element={<AccountsRoutes/>}/>
            <ProtectedRoute path="users/*" element={<UserRoutes/>}/>
            <ProtectedRoute path="photos/*" element={<PhotoRoutes/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Layout>
      </AuthStorage>
    </BrowserRouter>
  );
}

export default App;
