function Home() {
  return (
    <>
      <main>
        <section className="opening">
          <h1>YONGTECH</h1>
        </section>

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
              A YongTech está em construção: um espaço para criar projetos,
              experiências digitais e mundos com identidade própria.
            </p>
          </div>
          <div className="hero__visual">
            <img
              src="/images/landing/yongtech-construction-hero-full.png"
              alt="Ilustração de um jovem de costas diante de uma interface tecnomágica, acompanhado por um gato."
            />
          </div>
        </section>
      </main>
      <footer>© 2026 Yongtech. Todos os direitos reservados.</footer>
    </>
  );
}
export default Home;
