import React from "react";
import "../styles/planos.css"; 

interface PlanoProps {
  title: string;
  speed: string;
  price: string;
  description: string;
}

const Plano: React.FC<PlanoProps> = ({ title, speed, price, description }) => {
  return (
    <div className="plano">
      <h2>{title}</h2>
      <p className="speed">{speed}</p>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <button className="btn-primary">Assine Agora</button>
    </div>
  );
};

const Planos: React.FC = () => {
  return (
    <section id="planos" className="container container-planos">
      <h1>Nossos Planos Promocionais</h1>
      <div className="planos-grid">

        <Plano
          title="Plano Básico"
          speed="450 MEGAS"
          price="R$ 99,00"
          description="Ideal para navegação e streaming de vídeos."
        />

        <Plano
          title="Plano Médio"
          speed="650 MEGAS"
          price="R$ 144,90"
          description="Perfeito para quem precisa de mais velocidade."
        />
        
        <Plano
          title="Plano Avançado"
          speed="950 MEGAS"
          price="R$ 174,90"
          description="Para quem precisa da máxima velocidade."
        />
      </div>
    </section>
  );
};

export default Planos;
