import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage.tsx";
import TodosPage from "./pages/TodosPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
