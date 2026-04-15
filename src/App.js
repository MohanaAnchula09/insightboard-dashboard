import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import Reports from "./components/Reports";
import "./styles.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <Router>
      <div className="app-layout">
        <Sidebar />

        <div className="main-content">
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />

            <Route
              path="/analytics"
              element={
                <Analytics
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />

            <Route
              path="/reports"
              element={
                <Reports
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;