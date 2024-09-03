import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import AppLayout from "./components/common/AppLayout";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:index" element={<Category />} />
          <Route path="/admin/:menu" element={<Admin />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
