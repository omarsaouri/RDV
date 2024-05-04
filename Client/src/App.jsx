import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminAuth from "./pages/AdminAuth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/admin" element={<AdminAuth userType="admin" />} />
      </Routes>
    </Router>
  );
}

export default App;
