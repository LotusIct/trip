import React from "react";
import "./Pets.css";

// Importando imagens do src/assets
import pequeno from "../assets/pequeno.png";
import medio from "../assets/medio.png";
import grande from "../assets/grande.png";
import gato from "../assets/gato.png";

// Exemplo de pets
const pets = [
  {
    nome: "Cães Pequenos",
    descricao: "Destinos pet-friendly para cães de pequeno porte.",
    imagem: pequeno,
  },
  {
    nome: "Cães Médios",
    descricao: "Aventuras seguras e confortáveis para cães médios.",
    imagem: medio,
  },
  {
    nome: "Cães Grandes",
    descricao: "Espaços amplos e trilhas para cães grandes.",
    imagem: grande,
  },
  {
    nome: "Gatos",
    descricao: "Dicas de hospedagem e passeios tranquilos para gatos.",
    imagem: gato,
  },
];

export default function Pets() {
  return (
    <section className="pets">
      <h2>Viagens por tipo de pet</h2>
      <p>Selecione o porte ou tipo do seu pet e descubra experiências personalizadas.</p>
      <div className="pets-grid">
        {pets.map((pet) => (
          <div className="pet-card" key={pet.nome}>
            <div className="pet-img">
              <img src={pet.imagem} alt={pet.nome} />
            </div>
            <div className="pet-body">
              <h3>{pet.nome}</h3>
              <p>{pet.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
