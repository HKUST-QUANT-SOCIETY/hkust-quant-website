import React, { createContext, useContext, useState, useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signout as signoutAction } from './userActions';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (userInfo) {
      setIsAuthenticated(true);
      setUser(userInfo);
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, [userInfo]);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    dispatch(signoutAction());
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
