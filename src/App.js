import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import MentionsLegales from "./pages/MentionsLegales";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mentions-legales' element={<MentionsLegales />}></Route>
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default App;