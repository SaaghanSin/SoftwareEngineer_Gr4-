// Context.js
import React, { createContext, useContext } from "react";
import axios from "axios";
const MyContext = createContext();

export const MyModify = ({ children }) => {
  const [staticModify, setStaticModify] = React.useState(false);
  const [selectedTypescontext, setSelectedTypesContext] = React.useState([]);
  const [staticFile, setStaticfile] = React.useState(0);
  const [userName, setUserName] = React.useState("");
  const [pageNum, setPageNum] = React.useState(0);
  const setTruestaticModify = () => {
    setStaticModify(true);
  };
  const setUsr = (e) => {
    setUserName(e);
  };
  const setPageNumber = (e) => {
    setPageNum(e);
  };
  const setFalsestaticModify = () => {
    setStaticModify(false);
  };
  const setmyFile = (selectedTypes) => {
    setSelectedTypesContext([...selectedTypes]);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost/spso-service/src/api/GetPage.php`,
        {
          params: { TenDangNhap: userName },
        }
      );

      console.log("Response from the server:", response);

      // Parse the JSON data from the combined string
      const responseData = JSON.parse(
        response.data.split("Connected successfully")[1].trim()
      );

      if (responseData.success) {
        setPageNumber(responseData.data.SoTrangSoHuu);
        pageNum = responseData.data.SoTrangSoHuu;
        console.log("SoTrangSoHuu value:", responseData.data.SoTrangSoHuu);
      } else {
        console.log("No data found for the given username");
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Request setup error:", error.message);
      }
    }
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
        setStaticfile,
        userName,
        setUsr,
        pageNum,
        setPageNumber,
        fetchData, // Change this name
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
