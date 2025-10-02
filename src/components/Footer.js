import React, { useState } from "react";
import './Footer.css';
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [contatoNome, setContatoNome] = useState("");
  const [contatoEmail, setContatoEmail] = useState("");
  const [contatoDescricao, setContatoDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMensagem("Por favor, insira um e-mail válido.");
      return;
    }
    console.log("Email inscrito:", email);
    setMensagem("Obrigado por se inscrever! 🎉");
    setEmail("");
  };

  const handleContatoSubmit = (e) => {
    e.preventDefault();
    if (!contatoNome || !contatoEmail || !contatoDescricao) {
      alert("Preencha todos os campos antes de enviar!");
      return;
    }
    if (!contatoEmail.includes("@")) {
      alert("Insira um e-mail válido!");
      return;
    }

    const phone = "5511999999999";
    const mensagemWhats = `Olá! Meu nome é ${contatoNome}. ${contatoDescricao} (Email: ${contatoEmail})`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensagemWhats)}`;
    window.open(url, "_blank");

    setContatoNome("");
    setContatoEmail("");
    setContatoDescricao("");
  };

  return (
    <footer className="footer">
      <div className="inscrever">
        <h3>Inscreva-se para receber novidades</h3>
        <form onSubmit={handleSubmit} className="footer-form horizontal-form">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Inscrever</button>
        </form>
        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>

      <div className="contato">
        <h3>Fale conosco</h3>
        <form onSubmit={handleContatoSubmit} className="footer-form contato-form">
          <input
            type="text"
            placeholder="Nome"
            value={contatoNome}
            onChange={(e) => setContatoNome(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={contatoEmail}
            onChange={(e) => setContatoEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Descrição da sua mensagem"
            value={contatoDescricao}
            onChange={(e) => setContatoDescricao(e.target.value)}
            required
          />
          <button type="submit" className="whatsapp-button">
            <FaWhatsapp size={20} /> Enviar via WhatsApp
          </button>
        </form>
      </div>

      <p className="copy">© 2025 Patas pelo Brasil. Todos os direitos reservados.</p>
    </footer>
  );
}
