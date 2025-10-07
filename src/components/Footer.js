import React, { useState } from "react";
import './Footer.css';
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [nome, setNome] = useState("");
  const [contatoEmail, setContatoEmail] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleInscricao = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMensagem("Por favor, insira um e-mail válido.");
      return;
    }
    console.log("Inscrito:", email);
    setMensagem("Inscrição realizada com sucesso! 🎉");
    setEmail("");
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!nome || !contatoEmail || !descricao) {
      alert("Preencha todos os campos!");
      return;
    }
    if (!contatoEmail.includes("@")) {
      alert("E-mail inválido!");
      return;
    }

    const phone = "5511999999999";
    const mensagemWhats = `Olá! Meu nome é ${nome}. ${descricao} (Email: ${contatoEmail})`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensagemWhats)}`;
    window.open(url, "_blank");

    setNome("");
    setContatoEmail("");
    setDescricao("");
  };

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="newsletter">
          <h3>Receba novidades</h3>
          <p>Fique por dentro das últimas dicas e destinos pet-friendly!</p>
          <form onSubmit={handleInscricao} className="newsletter-form">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              <FaEnvelope /> Inscrever
            </button>
          </form>
          {mensagem && <p className="mensagem">{mensagem}</p>}
        </div>

        <div className="contato">
          <h3>Fale com a gente</h3>
          <form className="contato-form" onSubmit={handleWhatsApp}>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={contatoEmail}
              onChange={(e) => setContatoEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Digite sua mensagem"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
            <button type="submit" className="whatsapp-btn">
              <FaWhatsapp size={20} /> Entrar em contato
            </button>
          </form>
        </div>

      </div>

      <p className="copy">© 2025 Patas pelo Brasil. Todos os direitos reservados.</p>
    </footer>
  );
}
