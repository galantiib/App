import { useState, useEffect } from "react";
import { Layout } from "./Layout.tsx";

const slides = [
  {
    eyebrow: "Kujdes i certifikuar",
    title: "Misioni Ynë",
    text: "Të ofrojmë produkte farmaceutike të sigurta, efektive dhe të certifikuara ndërkombëtarisht që përmirësojnë jetën e pacientëve.",
    metric: "Standarde GMP",
  },
  {
    eyebrow: "Rritje rajonale",
    title: "Vizioni",
    text: "Të bëhemi një lider rajonal në industrinë farmaceutike përmes inovacionit dhe standardeve të larta shkencore.",
    metric: "Partneritet shkencor",
  },
  {
    eyebrow: "Besim afatgjatë",
    title: "Vlerat",
    text: "Integritet, cilësi, transparencë dhe përkushtim maksimal ndaj shëndetit të njeriut.",
    metric: "Cilësi pa kompromis",
  },
];

const highlights = [
  { value: "20+", label: "produkte në portofol" },
  { value: "5", label: "partnerë strategjikë" },
  { value: "GMP", label: "standard prodhimi" },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const activeSlide = slides[index];
  const slideCount = slides.length;
  const previousSlide = () => setIndex((current) => (current + slideCount - 1) % slideCount);
  const nextSlide = () => setIndex((current) => (current + 1) % slideCount);
  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((current) => (current + 1) % slides.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <Layout>
      <section className="about-hero">
        <div className="about-copy">
          <span className="eyebrow">Ozzo Pharm</span>
          <h2>
            Kujdes farmaceutik me standard të lartë dhe fokus te pacienti.
          </h2>
          <p>
            Ozzo Pharm është një kompani farmaceutike e përkushtuar për të çuar
            përpara kujdesin shëndetësor përmes inovacionit, integritetit
            shkencor dhe produkteve të sigurta.
          </p>
        </div>

        <div className="about-panel" aria-label="Pikat kryesore">
          <img src="/ozzo.png" alt="" className="about-logo" />
          <div>
            <strong>Katalog i hulumtuar</strong>
            <span>Produkte të zgjedhura për cilësi, siguri dhe vlerë klinike.</span>
          </div>
        </div>
      </section>

      <section className="highlights-grid" aria-label="Përmbledhje">
        {highlights.map((item) => (
          <div className="highlight-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="sectiong">
        <h2 className="ozzo3">
          Rreth <span className="ozzo2">ozzo</span>pharm
        </h2>
        <p>
          Zhvillimi ynë i bazuar në kërkime siguron që çdo produkt të përmbushë
          standardet rregullatore ndërkombëtare dhe të ofrojë vlerë të matshme
          për pacientin.
        </p>
        <p>
          Ne bashkëpunojmë ngushtë me profesionistë të kujdesit shëndetësor për
          të përmirësuar jetën përmes ilaçeve të sigurta, efektive dhe të arritshme.
        </p>
      </section>

      <section className="carousel-section" aria-label="Vlerat kryesore të Ozzo Pharm">
        <div className="carousel">
          <button
            className="carousel-arrow left"
            type="button"
            aria-label="Shfaq sliden e mëparshëm"
            onClick={previousSlide}
          >
            ‹
          </button>

          <article className="carousel-card">
            <div className="carousel-kicker">{activeSlide.eyebrow}</div>
            <div className="carousel-progress" aria-hidden="true">
              <span style={{ width: `${((index + 1) / slideCount) * 100}%` }} />
            </div>
            <div className="carousel-count">
              {String(index + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}
            </div>
            <h3>{activeSlide.title}</h3>
            <p>{activeSlide.text}</p>
            <div className="carousel-metric">{activeSlide.metric}</div>
          </article>

          <button
            className="carousel-arrow right"
            type="button"
            aria-label="Shfaq sliden tjetër"
            onClick={nextSlide}
          >
            ›
          </button>
        </div>

        <div className="carousel-dots" aria-label="Zgjidh sliden">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.title}
              className={`carousel-dot ${slideIndex === index ? "active" : ""}`}
              type="button"
              aria-label={`Shfaq ${slide.title}`}
              aria-current={slideIndex === index ? "true" : undefined}
              onClick={() => setIndex(slideIndex)}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
