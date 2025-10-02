import React, { useState, useRef } from "react";
import { destinos } from "../data/destinos";
import "./Destinos.css";

export default function Destinos() {
  const [index, setIndex] = useState(0);
  const slidesToShow = 3;
  const startX = useRef(0);
  const endX = useRef(0);

  const maxIndex = Math.max(destinos.length - slidesToShow, 0);

  const nextSlide = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Swipe
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = startX.current - endX.current;
    if (delta > 50) nextSlide();
    else if (delta < -50) prevSlide();
  };

  return (
    <section className="destinos">
      <h2>Destinos pelo Brasil</h2>
      <div
        className="carrossel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className="arrow prev" onClick={prevSlide}>
          &lt;
        </button>
        <div
          className="carrossel-track"
          style={{
            transform: `translateX(-${index * (100 / slidesToShow)}%)`,
          }}
        >
          {destinos.map((destino) => (
            <div className="card" key={destino.nome}>
              <div className="card-img">
                <img src={destino.imagem} alt={destino.nome} />
              </div>
              <div className="card-body">
                <h3>{destino.nome}</h3>
                <p>{destino.descricao}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </section>
  );
}
