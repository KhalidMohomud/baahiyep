import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Vision from './components/Vision';
import Services from './components/Services';
import Packages from './components/Packages';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Vision />
      <Services />
      <Packages />
    </div>
  );
}

export default App;