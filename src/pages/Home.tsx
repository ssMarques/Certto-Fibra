import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png.jpg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/index.css";
import Button from "../components/Button";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import "../styles/button.css";
import Solucoes from "../components/Solucoes";
import Planos from "../components/Planos";
import { Contato } from "../components/Contato";
import Rodape from "../components/Rodape"; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Testimonials } from "../components/Testimonials";



export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      {/* Cabeçalho */}
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

          {/* Menu Desktop */}
          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          {/* Ações Desktop */}
          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="#">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          {/* Menu Mobile */}
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#solution">Soluções</a>
                    </li>
                    <li>
                      <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                      <a href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="Ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="Ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retângulo dois tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retângulo um tela inicial" />

        <div className="container content">
          <p className="desktop-only" style={{ color: "#ffb300" }}>
            Olá
          </p>
          <h1>Certto é estar com você para trabalho, estudo e lazer!</h1>
          <p className="custom-paragraph-style">
            Atendimento humanizado, 7 dias da semana.
          </p>

          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      {/* Seção de Testemunhos */}
      <Testimonials/>
      

      {/* Outras Seções */}
      <Solucoes />
      <div className="plans">
        <Planos />
      </div>
      <Contato />

      {/* Rodapé */}
      <Rodape />
    </>
  );
}
