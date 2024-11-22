import React from "react";
import "../styles/solucoes.css";

interface Solucao {
  icone: string;
  titulo: string;
  descricao: string;
}

const solucoesData: Solucao[] = [
  {
    icone: "🚀",
    titulo: "Internet Rápida",
    descricao: "Navegue com ultra velocidade e estabilidade.",
  },
  {
    icone: "🔒",
    titulo: "Segurança Garantida",
    descricao: "Proteja seus dados com nossa tecnologia avançada.",
  },
  {
    icone: "🎓",
    titulo: "Suporte 24/7",
    descricao: "Estamos sempre prontos para te ajudar, 24 horas por dia.",
  },
];

const Solucoes: React.FC = () => {

  return (

    <section id="solucoes" className="container-solution container py-lg">

      <h2 className="titulo-secao">Nossas Soluções</h2>
      
      <div className="grid-solucoes">
        {solucoesData.map((solucao, index) => (
          <div key={index} className="cartao-solucao">
            <div className="icone-solucao">{solucao.icone}</div>
            <h3 className="titulo-solucao">{solucao.titulo}</h3>
            <p className="descricao-solucao">{solucao.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solucoes;
