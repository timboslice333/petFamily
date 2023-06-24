import React, { useState, createContext } from 'react';
import { Auth } from 'aws-amplify'
import awsconfig from '../src/aws-exports'

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  React.useEffect(() => {
    Auth.configure(awsconfig)
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(() => setUser(null));

  }, []);

  const login = (usernameOrEmail, password) =>
    Auth.signIn(usernameOrEmail, password)
      .then(cognitoUser => {
        setUser(cognitoUser);
        return cognitoUser;
      })
      .catch((err) => {
        if (err.code === 'UserNotFoundException') {
          err.message = 'Invalid username or password';
        }

        throw err;
      });

  const logout = () =>
    Auth.signOut().then(data => {
      setUser(null);
      return data;
    });


const values = React.useMemo(() => ({ user, login, logout }), [user]);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
