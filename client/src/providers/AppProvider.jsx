import React, { createContext, useEffect, useMemo, useState } from "react";
import jwt_decode from "jwt-decode";

export const AppContext = createContext(null);

export const baseUserData = {
  id: '',
  email: '',
  isAuth: false,
};

const AppProvider = ({ children }) => {

  let value = {};

  //FILTERS
  const baseFilters = {
    tools: [],
    languages: [],
    role: [],
    level: []
  }
  const [filtersСurrent, setFiltersСurrent] = useState(baseFilters);

  const valueFilters = useMemo(() => ({ filtersСurrent, setFiltersСurrent, baseFilters }), [filtersСurrent]);

  //USER
  const getUserLocalStorage = () => {
    const token = localStorage.getItem('token');

    if (token) {
      const tokenData = jwt_decode(token);
      return { id: tokenData?.id, email: tokenData?.email, isAuth: true };
    } else {
      return baseUserData;
    }
  };

  const [user, setUser] = useState(getUserLocalStorage());

  useEffect(() => {
    const newUser = getUserLocalStorage();
    setUser(newUser);
  }, []);

  const valueUser = { user, setUser };

  //STATE
  value = { valueFilters, valueUser };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider };