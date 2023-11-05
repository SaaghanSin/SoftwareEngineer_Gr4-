import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSideBar from "../../../components/sideBar/userSideBar";
const HistoryPage = () => {
  return (
    <div>
      <UserSideBar />
      <h1>This is the HistoryPage Page</h1>
    </div>
  );
};

export default HistoryPage;
