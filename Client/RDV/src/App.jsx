import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SimpleCard from "./SimpleCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/admin" element={<SimpleCard userType="admin" />} />
      </Routes>
    </Router>
  );
}

export default App;
