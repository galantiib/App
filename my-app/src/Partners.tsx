import { Layout } from "./Layout.tsx";

const partners = [
  {
    name: "Hamapharm",
    image: "/app/partners/hamapharm.png",
    description:
      "Prodhues kroat i pajisjeve mjekësore, shtesave ushqimore dhe kozmetikës, me kapacitete për etiketë private, prodhim me kontratë dhe shpërndarje të gatshme.",
  },
  {
    name: "The Mossi London",
    image: "/app/partners/mossi.png",
    description:
      "Markë e specializuar në kujdesin e flokëve, me produkte kundër rënies së flokëve dhe formulime për përdorim pas transplantimit.",
  },
  {
    name: "Ozone Hair Clinic",
    image: "/app/partners/ozone.png",
    description:
      "Klinikë e fokusuar në trajtime moderne për rënien e flokëve dhe restaurimin e flokëve në Ballkan.",
  },
  {
    name: "Ozone Pharmacy",
    image: "/app/partners/pharmacy.png",
    description:
      "Farmaci me portofol të gjerë ilaçesh, vitaminash, suplementesh dhe produktesh të kujdesit shëndetësor.",
  },
  {
    name: "Atilim Turkey",
    image: "/app/partners/atilim.png",
    description:
      "Prodhues turk i certifikuar në industrinë farmaceutike dhe kozmetike, me teknologji moderne dhe standarde ndërkombëtare.",
  },
];

const Partners = () => {
  return (
    <Layout>
      <section className="section page-intro">
        <span className="eyebrow">Rrjeti ynë</span>
        <h2>Partnerët Tanë</h2>
        <p className="partners-intro">
          Ozzo Pharm bashkëpunon me kompani ndërkombëtare të njohura për të
          garantuar cilësinë më të lartë të produkteve dhe standarde farmaceutike
          të certifikuara.
        </p>
      </section>

      <section className="partners-grid" aria-label="Partnerët">
        {partners.map((partner) => (
          <article className="partner-card" key={partner.name}>
            <div className="partner-logo-panel">
              <img src={partner.image} alt={partner.name} />
            </div>
            <h3>{partner.name}</h3>
            <p>{partner.description}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Partners;
