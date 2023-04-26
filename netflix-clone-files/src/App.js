import "./App.css";
import Navbar from "./components/routes/Navbar/Navbar";
import Home from "./components/routes/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Result from "./components/routes/Results/Results";
import { useState } from "react";

function App() {
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (e) => {
    const searchItem = e.target.value.toLowerCase();
    setSearchField(searchItem);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navbar onSearchChange={onSearchChange} searchField={searchField} />
        }
      >
        <Route index={true} element={<Home />} />
        <Route
          path="results"
          element={
            <Result onSearchChange={onSearchChange} searchField={searchField} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
