import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectManufacture, setSelectManufacturer] = useState("");
  const [selectYear, setSelectYear] = useState("");

  const handleManufacturerChange = (e) => {
    setSelectManufacturer(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectYear(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        selectManufacture,
        selectYear,
        handleManufacturerChange,
        handleYearChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};