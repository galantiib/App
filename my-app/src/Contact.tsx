import { Layout } from "./Layout.tsx";

const Contact = () => {
  return (
    <Layout>
      <section className="contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">Na kontaktoni</span>
          <h2>Flasim për informacion mjekësor, partneritete dhe produkte.</h2>
          <p>
            Për informacion mjekësor, partneritete ose pyetje të përgjithshme,
            ju lutemi të na kontaktoni duke përdorur formularin.
          </p>

          <div className="contact-note">
            <strong>Përgjigje profesionale</strong>
            <span>Ekipi ynë do ta shqyrtojë mesazhin dhe do t'ju kontaktojë sa më shpejt.</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Emri i plotë
            <input type="text" placeholder="Emri dhe mbiemri" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="email@example.com" required />
          </label>
          <label>
            Subjekti
            <input type="text" placeholder="Si mund t'ju ndihmojmë?" />
          </label>
          <label>
            Mesazhi
            <textarea placeholder="Shkruani mesazhin tuaj" />
          </label>
          <button className="messagebtn" type="submit">Dërgo mesazhin</button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
