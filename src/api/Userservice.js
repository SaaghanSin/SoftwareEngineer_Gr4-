import React from "react";

import axios from "./customaxios";
const loginApi = (email) => {
  return axios.post("/api/login", { email });
};
export { loginApi };
