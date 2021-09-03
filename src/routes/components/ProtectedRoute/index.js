import React, { useContext } from 'react'
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext'

const ProtectedRoute = (props) => {
  const { data } = useContext(AuthContext);

  if (data) return <Route {...props} />

  return (<Navigate to="/accounts/signin"/>)
}

export default ProtectedRoute;
