import { Layout } from "./Layout.tsx";

const Partners = () => {
  return (
    <Layout>
      <section className="section">
        <h2>Partnerët Tanë</h2>

        <p className="partners-intro">
          Ozzo Pharm bashkëpunon me kompani ndërkombëtare të njohura për të garantuar cilësinë më të lartë të produkteve dhe standarde farmaceutike të certifikuara.
        </p>

        <div className="partners-grid">
          <div className="partner-card">
            <h3>Hamapharm</h3>
            <p>
              Hamapharm është një prodhues kroat i pajisjeve mjekësore, shtesave ushqimore dhe kozmetikës. Ofrojnë Etiketë Private, Prodhim me Kontratë dhe Shpërndarje të gatshme — nga koncepti deri në raft, të mbështetur nga GMP Codex Alimentarius dhe ISO 13485.
            </p>
            <img src="/partners/hamapharm.png" className="partner-logo1" />
          </div>

          <div className="partner-card">
            <h3>The Mossi London</h3>
            <p>
              Mossi London është një markë e specializuar për kujdesin e flokëve që përqendrohet në produktet kundër rënies së flokëve, të dizajnuara veçanërisht për përdorim pas transplantimit të flokëve. Gama e tyre përfshin shampo, serume dhe vitamina të formuluara për të nxitur rritjen e flokëve.
            </p>
            <img src="/partners/mossi.png" className="partner-logo2" />
          </div>

          <div className="partner-card">
            <h3>Ozone Hair Clinic</h3>
            <p>
             Klinika e Flokëve Ozone është një klinikë lider në Ballkan në trajtimet më të mira për rënien e flokëve tek meshkujt dhe femrat. Synojnë ta bëjnë operacionin tuaj të transplantimit të flokëve dhe përvojat e restaurimit të flokëve sa më të këndshme të jetë e mundur.
            </p>
            <img src="/partners/ozone.png" className="partner-logo3" />
          </div>

          <div className="partner-card">
            <h3>Ozone Pharmacy</h3>
            <p>
             Ozone Pharmacy është ndër farmacitë me të mëdhaja në Kosovë ku njerëzit mund të marrin ilaçe, vitamina, suplemente dhe produkte të tjera të kujdesit shëndetësor. 
            </p>
            <img src="/partners/pharmacy.png" className="partner-logo4" />
          </div>

          <div className="partner-card">
            <h3>Atilim Turkey</h3>
            <p>
              Prodhues turk i certifikuar në industrinë farmaceutike dhe kozmetike me teknologji moderne dhe standarde ndërkombëtare.
            </p>
            <img src="/partners/atilim.png" className="partner-logo5" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
