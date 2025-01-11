import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { Home, About, Events} from "./components/pages";
import {Footer} from "./components/Footer.jsx"
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="events">
        <Events />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Footer/>
      </section>
    </div>
  );
}

export default App;
