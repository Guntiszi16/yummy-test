import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Favorite from "./pages/Favorite";
import Contact from "./pages/Contact";

function App() {
  const [favorite, setFavorite] = useState([]);

  return (
    <div className="App">
      <Navbar favorite={favorite} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/recipe"
          element={<Recipe favorite={favorite} setFavorite={setFavorite} />}
        />
        <Route path="/favorite" element={<Favorite favorite={favorite} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
