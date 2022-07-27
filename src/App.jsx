import { useState } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import UserInput from "./components/UserInput";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<UserInput />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<Pokemon />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
