import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "./Layout.tsx";

const publicAsset = (path: string) => `/App${path}`;

const slides = [
  {
    eyebrow: "Kujdes i certifikuar",
    title: "Misioni Yne",
    text: "Te ofrojme produkte farmaceutike te sigurta, efektive dhe te certifikuara nderkombetarisht qe permiresojne jeten e pacienteve.",
    metric: "Standarde GMP",
  },
  {
    eyebrow: "Rritje rajonale",
    title: "Vizioni",
    text: "Te behemi nje lider rajonal ne industrine farmaceutike permes inovacionit.",
    metric: "Partneritet shkencor",
  },
  {
    eyebrow: "Besim afatgjate",
    title: "Vlerat",
    text: "Integritet, cilesi, transparence dhe perkushtim maksimal ndaj shendetit te njeriut ne cdo vendim qe marrim.",
    metric: "Cilesi pa kompromis",
  },
  {
    eyebrow: "Inovacion dhe zhvillim",
    title: "E Ardhmja",
    text: "Te investojme vazhdimisht ne kerkime dhe zhvillim per te sjelle zgjidhje moderne qe permbushin nevojat e pacienteve.",
    metric: "Inovacion i vazhdueshem",
  },
];

const highlights = [
  { value: "20+", label: "produkte ne portofol" },
  { value: "5", label: "partnere strategjike" },
  { value: "GMP", label: "standard prodhimi" },
];

const pillars = [
  {
    number: "01",
    title: "Cilesi e kontrolluar",
    text: "Produktet zgjidhen me fokus ne standarde prodhimi, dokumentacion te qarte dhe vlere te matshme per pacientin.",
  },
  {
    number: "02",
    title: "Partneritet profesional",
    text: "Bashkepunojme me prodhues dhe profesioniste shendetesore qe ndajne te njejtin nivel pergjegjesie ndaj tregut.",
  },
  {
    number: "03",
    title: "Portofol i kuruar",
    text: "Katalogu ndertohet rreth kategorive praktike, nga mireqenia dhe kujdesi ditor deri te mbeshtetja specifike shendetesore.",
  },
];

const commitments = [
  "Produkte te certifikuara dhe te dokumentuara qarte",
  "Bashkepunim me partnere te verifikuar nderkombetare",
  "Qasje profesionale ndaj nevojave te tregut shendetesor",
];

const partnerLogos = [
  publicAsset("/partners/mossi.png"),
  publicAsset("/partners/atilim.png"),
  publicAsset("/partners/hamapharm.png"),
  publicAsset("/partners/ozone.png"),
];

const About = () => {
  const [index, setIndex] = useState(0);
  const activeSlide = slides[index];
  const slideCount = slides.length;

  const previousSlide = () =>
    setIndex((current) => (current + slideCount - 1) % slideCount);
  const nextSlide = () => setIndex((current) => (current + 1) % slideCount);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <Layout>
      <section className="about-hero">
        <div className="about-copy">
          <span className="eyebrow">Ozzo Pharm</span>
          <h2>Kujdes farmaceutik me standard te larte dhe fokus tek pacienti.</h2>
          <p>
            Ozzo Pharm eshte kompani farmaceutike e fokusuar ne produkte te
            sigurta, partnere te besueshem dhe sherbim profesional per tregun
            shendetesor ne Kosove.
          </p>
          <div className="about-hero-actions" aria-label="Veprime kryesore">
            <Link to="/products">Shiko produktet</Link>
            <Link to="/partners">Partneret tane</Link>
          </div>
        </div>

        <div className="about-visual" aria-label="Ozzo Pharm">
          <div className="about-logo-frame">
            <img src={publicAsset("/ozzo.png")} alt="Ozzo Pharm" />
          </div>
          <div className="about-visual-note">
            <strong>Shendeti i pari</strong>
            <span>
              Nje portofol i zgjedhur me kujdes per cilesi, siguri dhe
              besueshmeri afatgjate.
            </span>
          </div>
        </div>
      </section>

      <section className="highlights-grid" aria-label="Permbledhje">
        {highlights.map((item) => (
          <div className="highlight-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="about-story">
        <div className="about-story-copy">
          <span className="eyebrow">Rreth nesh</span>
          <h2>Nje kompani e ndertuar mbi besim, pergjegjesi dhe standard.</h2>
          <p>
            Zhvillimi yne bazohet ne perzgjedhje te kujdesshme, dokumentacion te
            qarte dhe produkte qe permbushin pritshmeri profesionale.
          </p>
          <p>
            Ne punojme ngushte me profesioniste dhe partnere te certifikuar per
            te sjelle zgjidhje praktike, te sigurta dhe te arritshme.
          </p>
        </div>

        <div className="about-partner-panel" aria-label="Partnere">
          {partnerLogos.map((logo) => (
            <div key={logo}>
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section className="about-pillars" aria-label="Cfare na dallon">
        {pillars.map((pillar) => (
          <article className="about-pillar-card" key={pillar.title}>
            <span>{pillar.number}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="about-commitments" aria-label="Angazhimet tona">
        <div>
          <span className="eyebrow">Angazhimi yne</span>
          <h2>Cdo zgjedhje ne katalog duhet te kete arsye te qarte.</h2>
        </div>
        <ul>
          {commitments.map((commitment) => (
            <li key={commitment}>{commitment}</li>
          ))}
        </ul>
      </section>

      <section className="carousel-section" aria-label="Vlerat kryesore te Ozzo Pharm">
        <div className="carousel">
          <button
            className="carousel-arrow left"
            type="button"
            aria-label="Shfaq sliden e meparshem"
            onClick={previousSlide}
          >
            {"<"}
          </button>

          <article className="carousel-card">
            <div className="carousel-kicker">{activeSlide.eyebrow}</div>
            <div className="carousel-progress" aria-hidden="true">
              <span style={{ width: `${((index + 1) / slideCount) * 100}%` }} />
            </div>
            <div className="carousel-count">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(slideCount).padStart(2, "0")}
            </div>
            <h3>{activeSlide.title}</h3>
            <p>{activeSlide.text}</p>
            <div className="carousel-metric">{activeSlide.metric}</div>
          </article>

          <button
            className="carousel-arrow right"
            type="button"
            aria-label="Shfaq sliden tjeter"
            onClick={nextSlide}
          >
            {">"}
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
