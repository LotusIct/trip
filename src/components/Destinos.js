import React, { useState, useRef, useEffect } from "react";
import { destinos } from "../data/destinos";
import "./Destinos.css";

export default function Destinos() {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const startX = useRef(0);
  const endX = useRef(0);

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 768) setSlidesToShow(1);
    else if (width < 1024) setSlidesToShow(2);
    else setSlidesToShow(3);
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const maxIndex = Math.max(destinos.length - slidesToShow, 0);

  const nextSlide = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

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
      <div className="carrossel-wrapper">
       <button className="arrow prev" onClick={prevSlide} aria-label="Anterior">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</button>

        <div
          className="carrossel-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="carrossel-track"
            style={{
              transform: `translateX(-${index * (100 / slidesToShow)}%)`,
              width: `${(destinos.length * 100) / slidesToShow}%`,
            }}
          >
            {destinos.map((destino) => (
              <div
                className="card"
                key={destino.nome}
                style={{ flex: `0 0 ${100 / destinos.length}%` }}
              >
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
        </div>

        <button className="arrow next" onClick={nextSlide} aria-label="Próximo">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</button>
      </div>
    </section>
  );
}
