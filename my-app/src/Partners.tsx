import { Layout } from "./Layout.tsx";

const partners = [
  {
    name: "Hamapharm",
    image: `${process.env.PUBLIC_URL}/partners/hamapharm.png`,
    category: "Medical devices, supplements, cosmetics",
    region: "Croatia",
    description:
      "Prodhues kroat i pajisjeve mjekesore, shtesave ushqimore dhe kozmetikes, me kapacitete per etikete private, prodhim me kontrate dhe shperndarje te gatshme.",
  },
  {
    name: "The Mossi London",
    image: `${process.env.PUBLIC_URL}/partners/mossi.png`,
    category: "Hair care innovation",
    region: "United Kingdom",
    description:
      "Marke e specializuar ne kujdesin e flokeve, me produkte kunder renies se flokeve dhe formulime per perdorim pas transplantimit.",
  },
  {
    name: "Ozone Hair Clinic",
    image: `${process.env.PUBLIC_URL}/partners/ozone.png`,
    category: "Clinical hair restoration",
    region: "Balkans",
    description:
      "Klinike e fokusuar ne trajtime moderne per renien e flokeve dhe restaurimin e flokeve ne Ballkan.",
  },
  {
    name: "Ozone Pharmacy",
    image: `${process.env.PUBLIC_URL}/partners/pharmacy.png`,
    category: "Pharmacy and wellness",
    region: "Regional",
    description:
      "Farmaci me portofol te gjere ilacesh, vitaminash, suplementesh dhe produktesh te kujdesit shendetesor.",
  },
  {
    name: "Atilim Turkey",
    image: `${process.env.PUBLIC_URL}/partners/atilim.png`,
    category: "Pharmaceutical and cosmetic production",
    region: "Turkey",
    description:
      "Prodhues turk i certifikuar ne industrine farmaceutike dhe kozmetike, me teknologji moderne dhe standarde nderkombetare.",
  },
];

const partnershipStandards = [
  "Standarde te certifikuara prodhimi dhe dokumentacion i qarte",
  "Portofol me vlere praktike per profesionistet shendetesore",
  "Bashkepunim afatgjate me fokus ne cilesi dhe besueshmeri",
];

const Partners = () => {
  return (
    <Layout>
      <section className="partners-hero">
        <div className="partners-hero-copy">
          <span className="eyebrow">Rrjeti yne</span>
          <h2>Partnere strategjike per nje portofol farmaceutik me standard.</h2>
          <p>
            Ozzo Pharm bashkepunon me kompani nderkombetare te njohura per te
            garantuar cilesi te larte, stabilitet furnizimi dhe produkte qe
            plotesojne nevojat e tregut shendetesor.
          </p>
        </div>
      </section>

      <section className="partners-metrics" aria-label="Permbledhje partneresh">
        <div>
          <strong>{partners.length}</strong>
          <span>partnere aktive</span>
        </div>
        <div>
          <strong>4+</strong>
          <span>kategori bashkepunimi</span>
        </div>
        <div>
          <strong>GMP</strong>
          <span>fokus ne standarde</span>
        </div>
      </section>

      <section className="partners-showcase" aria-label="Partneret">
        {partners.map((partner, index) => (
          <article className="partner-card" key={partner.name}>
            <div className="partner-card-topline">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{partner.region}</span>
            </div>
            <div className="partner-logo-panel">
              <img src={partner.image} alt={partner.name} />
            </div>
            <div className="partner-card-copy">
              <span>{partner.category}</span>
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="partners-standard">
        <div>
          <span className="eyebrow">Si zgjedhim partneret</span>
          <h2>Bashkepunime qe forcojne cilesine e katalogut.</h2>
          <p>
            Partneritetet tona vleresohen per aftesine qe kane te sjellin
            produkte te sigurta, te dokumentuara dhe te pershtatshme per
            profesionistet dhe pacientet.
          </p>
        </div>

        <ul>
          {partnershipStandards.map((standard) => (
            <li key={standard}>{standard}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Partners;
