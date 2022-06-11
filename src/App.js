import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from './pages/Home';
import Continents from "./pages/Continents";
import Countries from "./pages/Countries";
import Country from "./pages/Country";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="continents" element={<Continents />} />
          <Route path="countries">
            <Route index element={<Countries />} />
            <Route path=":countryId" element={<Country />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
