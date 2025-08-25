
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShrekBookLearnMore from './pages/ShrekBookLearnMore';
import ShrekBookBuy from './pages/ShrekBookBuy';
import SpadLearnMore from './pages/SpadLearnMore';
import SpadBuy from './pages/SpadBuy';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shrekbook" element={<ShrekBookLearnMore />} />
        <Route path="/shrekbook/buy" element={<ShrekBookBuy />} />
        <Route path="/spad" element={<SpadLearnMore />} />
        <Route path="/spad/buy" element={<SpadBuy />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
