import React from "react";
import { motion } from "framer-motion";
import "./Sobre.css";

export default function Sobre() {
  return (
    <section className="sobre">
      <motion.div
        className="sobre-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>Sobre o Blog</h2>
        <p>
          O "Patas pelo Brasil" nasceu da paixão por viajar e da vontade de incluir os pets
          em cada aventura. A ideia surgiu quando percebemos que viajar com animais ainda
          é desafiador: muitos lugares não são pensados para eles e há pouca informação
          sobre experiências seguras e divertidas.
        </p>
        <p>
          Nosso objetivo é compartilhar os melhores destinos pelo Brasil, experiências únicas,
          dicas de custos e sugestões de acomodações como Airbnbs pet-friendly. Cada viagem
          é planejada considerando o porte do animal, tipo de experiência e bem-estar do pet.
        </p>
        <p>
          Além disso, queremos inspirar donos a se aventurarem sem abrir mão da segurança e do
          conforto de seus animais, mostrando que viajar com pets é possível, divertido e enriquecedor.
        </p>
        <p>
          Acreditamos que cada viagem é uma oportunidade de criar memórias inesquecíveis e
          fortalecer o vínculo entre humanos e animais, sempre com responsabilidade, planejamento
          e amor pelos pets.
        </p>
      </motion.div>
    </section>
  );
}
