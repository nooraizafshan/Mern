import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin  from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import Signupform from './Components/Signupform';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Signupform/>} />
          {/* <Route exact path="/signin" element={<Signin />} /> */}
          <Route exact path="/all" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
