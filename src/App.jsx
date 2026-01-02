import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Navbar from './components/navbar.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';

function App() {

  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App
