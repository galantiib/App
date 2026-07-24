import { Layout } from "./Layout.tsx";

const adviceCards = [
  {
    label: "01",
    title: "Ushqyerje e balancuar",
    text: "Mbani ne pjate perime, fruta, drithera te plota, bishtajore dhe proteina cilesore. Kufizoni kripen, sheqerin e shtuar dhe ushqimet shume te perpunuara.",
  },
  {
    label: "02",
    title: "Levizje e rregullt",
    text: "Ecja, ciklizmi, ushtrimet e lehta dhe pushimet nga qendrimi ulur ndihmojne zemren, metabolizmin, gjumin dhe mireqenien mendore.",
  },
  {
    label: "03",
    title: "Gjume dhe rikuperim",
    text: "Vendosni orare te qendrueshme, ulni ekspozimin ndaj ekraneve para gjumit dhe krijoni nje ambient te qete per pushim cilesor.",
  },
  {
    label: "04",
    title: "Perdorim i kujdesshem",
    text: "Lexoni gjithmone etiketen, dozimin dhe paralajmerimet. Pyesni farmacistin ose mjekun nese perdorni barna te tjera.",
  },
  {
    label: "05",
    title: "Kontrolle periodike",
    text: "Matja e tensionit, analizat baze, kontrolli dentar dhe keshillat profesionale ndihmojne ne zbulimin e hershem te problemeve shendetesore.",
  },
  {
    label: "06",
    title: "Hidratim dhe higjiene",
    text: "Pini uje rregullisht, lani duart shpesh dhe kushtojini vemendje shenjave te dehidratimit, sidomos te femijet dhe te moshuarit.",
  },
];

const urgentSignals = [
  "Dhimbje ose presion i forte ne gjoks, veshtiresi ne frymemarrje ose humbje e vetedijes.",
  "Dobesi e papritur ne njeren ane te trupit, crregullim i te folurit ose ndryshim i papritur i shikimit.",
  "Reaksion alergjik me enjtje te fytyres, buzeve ose fytit, skuqje te perhapur dhe veshtiresi ne frymemarrje.",
  "Temperature e larte e vazhdueshme, konfuzion, dhimbje e forte ose simptoma qe perkeqesohen shpejt.",
];

const carePrinciples = [
  { title: "Balancim", text: "ushqim, aktivitet, gjume" },
  { title: "Siguri", text: "etikete, doze, keshillim" },
  { title: "Vemendje", text: "simptoma dhe kontrolle" },
];

const quickChecklist = [
  "Mbani shenim produktet ose barnat qe perdorni.",
  "Mos e ndryshoni dozen pa keshille profesionale.",
  "Ruani produktet sipas udhezimit ne paketim.",
  "Kerkoni ndihme kur simptomat zgjasin ose perseriten.",
];

const Keshilla = () => {
  return (
    <Layout>
      <section className="advice-hero">
        <div className="advice-copy">
          <span className="eyebrow">Keshilla shendetesore</span>
          <h2>Udhezime te qarta per vendime me te kujdesshme cdo dite.</h2>
          <p>
            Kjo faqe ofron udhezime te pergjithshme per mireqenie, parandalim
            dhe perdorim te sigurt te produkteve shendetesore. Informacioni
            eshte edukues dhe nuk zevendeson keshillen e mjekut ose farmacistit.
          </p>
        </div>

        <aside className="advice-panel" aria-label="Parime te kujdesit">
          <div className="advice-panel-header">
            <span>Ozzo Pharm</span>
            <strong>Kujdes i perditshem, i organizuar mire.</strong>
          </div>
          <div className="advice-metrics">
            {carePrinciples.map((principle) => (
              <div key={principle.title}>
                <strong>{principle.title}</strong>
                <span>{principle.text}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="advice-overview">
        <div>
          <span className="eyebrow">Rutina e kujdesit</span>
          <h2>Pak zakone te mira krijojne nje baze me te forte shendetesore.</h2>
        </div>
        <ul>
          {quickChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="advice-grid" aria-label="Tema kryesore shendetesore">
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
          <span className="eyebrow">Kur duhet ndihme urgjente</span>
          <h2>Simptoma qe nuk duhen neglizhuar</h2>
          <p>
            Nese shfaqet nje nga keto shenja, kerkoni menjehere ndihme
            mjekesore ose telefononi numrin lokal te urgjences.
          </p>
        </div>

        <ul className="advice-alert-list">
          {urgentSignals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      </section>

      <section className="advice-safety-strip" aria-label="Burime te besueshme">
        <div>
          <strong>Mbeshtetur ne udhezime te besueshme</strong>
          <span>
            Per tema te vecanta ose simptoma personale, vendimi me i sigurt
            eshte konsultimi me profesionist shendetesor.
          </span>
        </div>
        <div className="advice-sources">
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
            target="_blank"
            rel="noreferrer"
          >
            WHO: Ushqyerja
          </a>
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"
            target="_blank"
            rel="noreferrer"
          >
            WHO: Aktiviteti fizik
          </a>
          <a
            href="https://www.cdc.gov/stroke/signs-symptoms/index.html"
            target="_blank"
            rel="noreferrer"
          >
            CDC: Shenjat e goditjes
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Keshilla;
