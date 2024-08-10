import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import AppLayout from "./components/common/AppLayout";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:index" element={<Category />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
