import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Yongtech — imaginação em experiências digitais</title>
        <meta
          name="description"
          content="A Yongtech é uma oficina em construção para criar projetos, experiências digitais e mundos com identidade própria."
        />
      </Head>

      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo principal
      </a>

      <header className="opening">
        <h1>Yongtech</h1>
      </header>

      <main id="conteudo-principal">
        <div className="transition" aria-hidden="true">
          <span className="transition__sigil">✦</span>
        </div>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="hero__eyebrow">Forjando a Yongtech</p>
            <h2 id="hero-title">
              Transformando imaginação em experiências vivas.
            </h2>

            <p>
              A Yongtech está em construção: um espaço para criar projetos,
              experiências digitais e mundos com identidade própria.
            </p>

            <p className="hero__presentation">
              <span className="hero__identity">Wilkson Silva</span>{" "}
              <strong>Desenvolvedor full stack júnior</strong> · construindo
              esta oficina com Next.js, Node.js e PostgreSQL.
            </p>
          </div>

          <figure className="hero__visual">
            <img
              src="/images/landing/yongtech-construction-hero-full.png"
              alt="Jovem de costas diante de uma interface tecnomágica, acompanhado por um gato."
            />
          </figure>
        </section>
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__top">
            <div className="site-footer__brand">
              <span className="site-footer__wordmark">Yongtech</span>
              <p>Uma oficina para transformar imaginação em experiências.</p>
            </div>
            <nav className="site-footer__nav" aria-label="Links da Yongtech">
              <a href="https://github.com/WilksonPedro/yongtech">GitHub</a>
              <a href="https://www.linkedin.com/in/wilkson-software-engineer/">
                LinkedIn
              </a>
              <a href="#conteudo-principal">Voltar ao conteúdo</a>
            </nav>
          </div>
          <div className="site-footer__bottom">
            <span>© 2026 Yongtech. Todos os direitos reservados.</span>
            <span>Feito com curiosidade e imaginação.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Home;
