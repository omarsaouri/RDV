import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminAuth from "./pages/Admin/AdminAuth";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/admin" element={<AdminAuth />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
