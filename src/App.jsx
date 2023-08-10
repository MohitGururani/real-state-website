import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStaeted';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>

      <section id="companies">
        <Companies />
      </section>

      <section id="residencies">
        <Residencies />
      </section>

      <section id="our-values">
        <Value />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="get-started">
        <GetStarted />
      </section>

      <Footer />
    </div>
  );
}

export default App;