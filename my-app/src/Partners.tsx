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
              Një kompani farmaceutike evropiane e specializuar në zhvillimin e suplementeve dhe produkteve medicinale sipas standardeve GMP.
            </p>
            <img src="/partners/hamapharm.png" className="partner-logo1" />
          </div>

          <div className="partner-card">
            <h3>The Mossi London</h3>
            <p>
              Brand britanik i njohur për produktet premium për kujdesin e flokëve dhe suplementet dermatologjike.
            </p>
            <img src="/partners/mossi.png" className="partner-logo2" />
          </div>

          <div className="partner-card">
            <h3>Ozone Hair Clinic</h3>
            <p>
             Ozone Hir Clinic është një klinikë e specializuar që përqendrohet në shëndetin e flokëve dhe të skalpit të kokës. 
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
