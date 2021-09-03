import React, { createContext, useCallback, useEffect, useState } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../config/api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const getUser = useCallback(async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);    
    navigate('/users');
  }, [navigate]);

  const signOut = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    localStorage.removeItem('dogs@token');
    navigate('/accounts/signin');
  }, [navigate]);

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem('dogs@token');

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) throw new Error('Token inválido');

          await getUser(token);
        } catch (err) {
          await signOut();
        } finally {
          setLoading(false);
        }    
      } else {
        setData(null);
      }
    }

    autoLogin();
  }, [getUser, signOut]);

  const signIn = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.status} - ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      localStorage.setItem('dogs@token', token);
      await getUser(token);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, data, error, loading }}>
      { children }
    </AuthContext.Provider>
  )
}