import React from "react";
import Slider from "react-slick";
import { noticias } from "../data/noticias"; // ✅ agora vem separado
import "./Noticias.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Noticias() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="noticias">
      <h2>Últimas Novidade sobre Viagens com Pets</h2>
      <Slider {...settings} className="carrossel">
        {noticias.map((noticia, index) => (
          <div className="noticia-card" key={index}>
            <img src={noticia.imagem} alt={noticia.titulo} />
            <div className="noticia-info">
              <h3>{noticia.titulo}</h3>
              <p>{noticia.descricao}</p>
              <a href={noticia.link} target="_blank" rel="noopener noreferrer">
                Leia mais
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
