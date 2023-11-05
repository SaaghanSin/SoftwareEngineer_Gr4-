import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrintPage from "./scenes/User/printpage/PrintPage";
import BalancePage from "./scenes/User/balancepage/BalancePage";
import HistoryPage from "./scenes/User/historypage/HistoryPage";
import Login from "./scenes/login/login";
function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/print" element={<PrintPage />} />
          <Route path="/balance" element={<BalancePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
