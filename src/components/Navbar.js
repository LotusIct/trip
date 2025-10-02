import React from "react";
import "./Navbar.css";
import logoImg from "../assets/logo.png"; // caminho para a imagem do logo

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImg} alt="Patas pelo Brasil" />
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>Sobre</li>
        <li>Destinos</li>
        <li>Experiências</li>
        <li>Notícias</li>
     
      </ul>
    </nav>
  );
}
