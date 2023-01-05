import React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Experience/>
      <Projects/>
      <Resume/>
    </div>
  );
}

export default App;
