import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { useMyContext } from "../../components/contextModify";
let userName = localStorage.getItem("usr");
let pageNum = localStorage.getItem("pnum");
const Wallet = () => {
  const [currentWalletNumber, setCurrentWalletNumber] = useState(pageNum);
  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost/spso-service/src/api/GetPage.php`, {
          params: { TenDangNhap: userName }
        });

        console.log("Response from the server:", response);

        // Parse the JSON data from the combined string
        const responseData = JSON.parse(response.data.split("Connected successfully")[1].trim());

        if (responseData.success) {
          setCurrentWalletNumber(responseData.data.SoTrangSoHuu);
          setPageNumber(currentWalletNumber);
          pageNum = currentWalletNumber;
          console.log("aaaaaaaaaaaaaaaaaaa");
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

    fetchData();
  }, []);
*/
  return (
    <div>
      <h2>Số trang dư: {pageNum}</h2>
    </div>
  );
};

export default Wallet;

