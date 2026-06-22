import { Layout } from "./Layout.tsx";

const adviceCards = [
  {
    label: "01",
    title: "Ushqyerje e balancuar",
    text:
      "Mbani në pjatë perime, fruta, drithëra të plota, bishtajore dhe proteina cilësore. Kufizoni kripën, sheqerin e shtuar dhe ushqimet shumë të përpunuara.",
  },
  {
    label: "02",
    title: "Lëvizje e rregullt",
    text:
      "Ecja, çiklizmi, ushtrimet e lehta dhe pushimet nga qëndrimi ulur ndihmojnë zemrën, metabolizmin, gjumin dhe mirëqenien mendore.",
  },
  {
    label: "03",
    title: "Gjumë dhe rikuperim",
    text:
      "Vendosni orare të qëndrueshme, ulni ekspozimin ndaj ekraneve para gjumit dhe krijoni një ambient të qetë për pushim cilësor.",
  },
  {
    label: "04",
    title: "Përdorim i kujdesshëm i produkteve",
    text:
      "Lexoni gjithmonë etiketën, dozimin dhe paralajmërimet. Pyesni farmacistin ose mjekun nëse përdorni barna të tjera, jeni shtatzënë, ushqeni me gji ose keni sëmundje kronike.",
  },
  {
    label: "05",
    title: "Kontrolle periodike",
    text:
      "Matja e tensionit, analizat bazë, kontrolli dentar dhe këshillat profesionale ndihmojnë në zbulimin e hershëm të problemeve shëndetësore.",
  },
  {
    label: "06",
    title: "Hidratim dhe higjienë",
    text:
      "Pini ujë rregullisht, lani duart shpesh dhe kushtojini vëmendje shenjave të dehidratimit, sidomos te fëmijët, të moshuarit dhe gjatë temperaturave të larta.",
  },
];

const urgentSignals = [
  "Dhimbje ose presion i fortë në gjoks, vështirësi në frymëmarrje ose humbje e vetëdijes.",
  "Dobësi e papritur në njërën anë të trupit, çrregullim i të folurit, marramendje e fortë ose ndryshim i papritur i shikimit.",
  "Reaksion alergjik me ënjtje të fytyrës, buzëve ose fytit, skuqje të përhapur dhe vështirësi në frymëmarrje.",
  "Temperaturë e lartë e vazhdueshme, konfuzion, dhimbje e fortë ose simptoma që përkeqësohen shpejt.",
];

const Keshilla = () => {
  return (
    <Layout>
      <section className="advice-hero">
        <div className="advice-copy">
          <span className="eyebrow">Këshilla shëndetësore</span>
          <h2>Informacion i qartë për vendime më të kujdesshme çdo ditë.</h2>
          <p>
            Kjo faqe ofron udhëzime të përgjithshme për mirëqenie, parandalim dhe
            përdorim të sigurt të produkteve shëndetësore. Informacioni është
            edukues dhe nuk zëvendëson këshillën e mjekut ose farmacistit.
          </p>
        </div>

        <aside className="advice-panel" aria-label="Parime të kujdesit">
          <div className="advice-panel-header">
            <span>Ozzo Pharm</span>
            <strong>Kujdes i përditshëm</strong>
          </div>
          <div className="advice-metrics">
            <div>
              <strong>Balancë</strong>
              <span>ushqim, aktivitet, gjumë</span>
            </div>
            <div>
              <strong>Siguri</strong>
              <span>etiketë, dozë, këshillim</span>
            </div>
            <div>
              <strong>Vëmendje</strong>
              <span>simptoma dhe kontrolle</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="advice-grid" aria-label="Tema kryesore shëndetësore">
        {adviceCards.map((card) => (
          <article className="advice-card" key={card.title}>
            <span>{card.label}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="advice-alert">
        <div>
          <span className="eyebrow">Kur duhet ndihmë urgjente</span>
          <h2>Simptoma që nuk duhen neglizhuar</h2>
          <p>
            Nëse shfaqet një nga këto shenja, kërkoni menjëherë ndihmë mjekësore
            ose telefononi numrin lokal të urgjencës.
          </p>
        </div>

        <ul className="advice-alert-list">
          {urgentSignals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      </section>

      <section className="advice-safety-strip" aria-label="Burime të besueshme">
        <div>
          <strong>Mbështetur në udhëzime të besueshme</strong>
          <span>
            Për tema të veçanta ose simptoma personale, vendimi më i sigurt është
            gjithmonë konsultimi me profesionist shëndetësor.
          </span>
        </div>
        <div className="advice-sources">
          <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noreferrer">
            WHO: Ushqyerja
          </a>
          <a href="https://www.who.int/news-room/fact-sheets/detail/physical-activity" target="_blank" rel="noreferrer">
            WHO: Aktiviteti fizik
          </a>
          <a href="https://www.cdc.gov/stroke/signs-symptoms/index.html" target="_blank" rel="noreferrer">
            CDC: Shenjat e goditjes
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Keshilla;
