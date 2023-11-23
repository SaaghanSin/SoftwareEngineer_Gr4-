import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import PrintPage from "./scenes/User/printpage/PrintPage";
import BalancePage from "./scenes/User/balancepage/BalancePage";
import HistoryPage from "./scenes/User/historypage/HistoryPage";
import Login from "./scenes/login/login";

import PrinterInfo from "./scenes/SPSO/PrinterInfo/PrinterInfo";
import ManagePrinter from "./scenes/SPSO/ManagePrinter/ManagePrinter";
function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/print" element={<PrintPage />} />
          <Route path="/balance" element={<BalancePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/printinfo" element={<PrinterInfo />} />
          <Route path="/printmanage" element={<ManagePrinter />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
