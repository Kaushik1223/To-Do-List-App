import React, { useRef } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from "react";

function App() {
    
  return (
    <div>
      <Navbar/>
      <div className="h-screen dark:bg-slate-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
    </div>
  );
}

export default App;
