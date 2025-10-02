import React from "react";
import "./Custos.css";

// Importando imagens
import hospedagemImg from "../assets/hospedagem.png";
import passeioImg from "../assets/passeio.png";
import valoresImg from "../assets/valores.png";

const dicas = [
  {
    titulo: "Hospedagem Pet-Friendly",
    descricao: "Descubra hotéis e pousadas que aceitam seu pet sem complicações.",
    imagem: hospedagemImg,
  },
  {
    titulo: "Passeios Seguros",
    descricao: "Trilhas, parques e praias que são ideais para pets de todos os portes.",
    imagem: passeioImg,
  },
  {
    titulo: "Valores Médios",
    descricao: "Dicas de quanto gastar em transporte, alimentação e hospedagem.",
    imagem: valoresImg,
  },
];

export default function Custos() {
  return (
    <section className="custos">
      <h2>Custos e Dicas</h2>
      <p>Aqui você encontra informações sobre valores médios, hospedagem e passeios com pets.</p>
      <div className="custos-grid">
        {dicas.map((dica) => (
          <div className="dica-card" key={dica.titulo}>
            <div className="dica-img">
              <img src={dica.imagem} alt={dica.titulo} />
            </div>
            <div className="dica-body">
              <h3>{dica.titulo}</h3>
              <p>{dica.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
