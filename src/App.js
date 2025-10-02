import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Destinos from "./components/Destinos";
import Pets from "./components/Pets";
import Custos from "./components/Custos";
import Noticias from "./components/Noticias";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Sobre />
        <Destinos />
        <Pets />
        <Custos />
        <Noticias />
      </main>
      <Footer />
    </>
  );
}

export default App;
