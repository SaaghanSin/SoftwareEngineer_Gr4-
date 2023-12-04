// Context.js
import React, { createContext, useContext } from "react";

const MyContext = createContext();

export const MyModify = ({ children }) => {
  const [staticModify, setStaticModify] = React.useState(false);
  const [selectedTypescontext, setSelectedTypesContext] = React.useState([]);
  const [staticFile, setStaticfile] = React.useState(0);
  const setTruestaticModify = () => {
    setStaticModify(true);
  };

  const setFalsestaticModify = () => {
    setStaticModify(false);
  };
  const setmyFile = (selectedTypes) => {
    setSelectedTypesContext([...selectedTypes]);
  };
  return (
    <MyContext.Provider
      value={{
        staticModify,
        setFalsestaticModify,
        setTruestaticModify,
        selectedTypescontext,
        setSelectedTypesContext,
        setmyFile,
        staticFile,
        setStaticfile, // Change this name
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
