import "../styles/testimonials.css";

export const Testimonials = () => {
    return (
        <>
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Conselho de quem conhece</p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                    Quem já testou a Certto Fibra sabe que nossa internet é sinônimo de velocidade e estabilidade. Estamos mudando a ideia de que internet boa tem que ser cara ou complicada.
                     Confira abaixo os depoimentos de nossos clientes e descubra como a Certto Fibra está transformando a experiência de conexão em sua casa ou empresa.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={"ProfileImageOne"} alt="Imagem perfil cliente" />
                            <div className="testimony">
                                <p>
                                    A Certto Fibra transformou a produtividade da minha empresa com uma internet rápida e sem quedas.
                                    Super recomendo!
                                </p>
                            </div>
                            <div className="rating">
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"StarOuter"} alt="ícone estrela sem fundo" width={20} height={22} />
                            </div>
                            <div className="names">
                                <p>Carlos Almeida</p>
                                <p>Empresário</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={"ProfileImageOne"} alt="Imagem perfil cliente" />
                            <div className="testimony">
                                <p>
                                    Internet estável e suporte ágil. Nunca mais tive problemas com a conexão!
                                </p>
                            </div>
                            <div className="rating">
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"StarOuter"} alt="ícone estrela sem fundo" width={20} height={22} />
                            </div>
                            <div className="names">
                                <p>Fernanda Costa</p>
                                <p>Profissional de TI</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={"ProfileImageOne"} alt="Imagem perfil cliente" />
                            <div className="testimony">
                                <p>
                                    A Certto Fibra garante a estabilidade que eu preciso para meu negócio online.
                                    Excelente!
                                </p>
                            </div>
                            <div className="rating">
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"StarOuter"} alt="ícone estrela sem fundo" width={20} height={22} />
                            </div>
                            <div className="names">
                                <p>Juliana Martins</p>
                                <p>Mãe e Profissional Remota</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={"ProfileImageOne"} alt="Imagem perfil cliente" />
                            <div className="testimony">
                                <p>
                                    A conexão é perfeita, mesmo com a família toda online.
                                    Estou muito satisfeita!
                                </p>
                            </div>
                            <div className="rating">
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"StarOuter"} alt="ícone estrela sem fundo" width={20} height={22} />
                            </div>
                            <div className="names">
                                <p>Ana Pereira</p>
                                <p>Influenciadora Digital</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={"ProfileImageOne"} alt="Imagem perfil cliente" />
                            <div className="testimony">
                                <p>
                                    A Certto Fibra me ajuda a estudar sem interrupções.
                                    A velocidade é incrível!
                                </p>
                            </div>
                            <div className="rating">
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"Star"} alt="ícone estrela" width={22} height={20} />
                                <img src={"StarOuter"} alt="ícone estrela sem fundo" width={20} height={22} />
                            </div>
                            <div className="names">
                                <p>Eduardo Souza</p>
                                <p>Estudante</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};
