import React from "react";
import "./Header.css";
import videoInicial from "../assets/dogs.mp4"; // importa o vídeo

export default function Header() {
  return (
    <header className="header">
      <video
        className="header-background"
        src={videoInicial}
        autoPlay
        loop
        muted
      ></video>

      <div className="header-content">
        <h3>Viaje pelo Brasil com seu pet, descubra destinos e experiências incríveis</h3>
      </div>
    </header>
  );
}
