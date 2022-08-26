import React from 'react';
import './App.css';
import Footer from './paginas/components/estaticos/footer/Footer';
import Navbar from './paginas/components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
