import "./App.css";
import Navbar from "./components/routes/Navbar/Navbar";
import Home from "./components/routes/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Result from "./components/routes/Results/Results";
import { useState } from "react";
import Users from "./components/routes/Users/Users";

function App() {
  const [searchField, setSearchField] = useState("");
  const [icon, setIcon] = useState("");

  const iconsClicked = (e) => {
    const icon = [e.target];
    const imageSrc = icon[0].__reactProps$08l96o9r5ye7.value;
    setIcon(imageSrc);
  };

  const onSearchChange = (e) => {
    const searchItem = e.target.value.toLowerCase();
    setSearchField(searchItem);
  };

  return (
    <Routes>
      <Route index={true} element={<Users onClick={iconsClicked} />} />

      <Route
        path="/"
        element={
          <Navbar
            onSearchChange={onSearchChange}
            searchField={searchField}
            icon={icon}
          />
        }
      >
        <Route path="home" element={<Home />} />

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
