import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/common/AppLayout";

function App() {
  return (
    <AppLayout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AppLayout>
  );
}

export default App;
