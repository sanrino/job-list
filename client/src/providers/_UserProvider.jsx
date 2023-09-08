import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {

  const baseValue = {
    user: '',
    isAuth: false,
  };

  const [user, setUser] = useState(baseValue);

  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
