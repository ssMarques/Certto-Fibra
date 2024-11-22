
import React from "react";
import "../styles/rodape.css"


const Rodape: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Seção 1: Logo e Redes Sociais */}
        <div className="footer-section">
          <h3>LogoMarca</h3>
          <div className="social-icons">
            <a href="#"><img src="/icons/instagram-icon.png" alt="Instagram" /></a>
            <a href="#"><img src="/icons/facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="/icons/youtube-icon.png" alt="YouTube" /></a>
          </div>
        </div>

        {/* Seção 2: Empresa */}
        <div className="footer-section">
          <h3>Empresa</h3>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Faça parte do time</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Seção 3: Funcionalidades */}
        <div className="footer-section">
          <h3>Funcionalidades</h3>
          <ul>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Análise de dados</a></li>
            <li><a href="#">Boot Discord</a></li>
          </ul>
        </div>

        {/* Seção 4: Recursos */}
        <div className="footer-section">
          <h3>Recursos</h3>
          <ul>
            <li><a href="#">IOS & Android</a></li>
            <li><a href="#">Teste a Demo</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>
      </div>

      {/* Seção inferior */}
      <div className="footer-bottom">
        <p>
          Feito com amor na aula de Programação Web💙©2024 AktieTech - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Rodape;
