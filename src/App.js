import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Information from './pages/Information';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="information" element={<Information />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
