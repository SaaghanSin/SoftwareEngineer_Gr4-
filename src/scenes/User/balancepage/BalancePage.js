import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSideBar from "../../../components/sideBar/userSideBar";
import PrintPage from "../printpage/PrintPage";
import HistoryPage from "../historypage/HistoryPage";
const BalancePage = () => {
  return (
    <div>
      <UserSideBar />
      <Routes>
        <Route path="/print" element={<PrintPage />} />
        <Route path="/balance" element={<BalancePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <h1>This is the BalancePage</h1>
    </div>
  );
};

export default BalancePage;
