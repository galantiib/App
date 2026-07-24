import { Layout } from "./Layout.tsx";

const contactTopics = [
  "Informacion per produkte",
  "Partneritete dhe bashkepunime",
  "Pyetje te pergjithshme",
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100093653766220",
    initial: "f",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ozzopharm/",
    initial: "i",
  },
];

const Contact = () => {
  return (
    <Layout>
      <section className="contact-hero">
        <div className="contact-copy">
          <span className="eyebrow">Na kontaktoni</span>
          <h2>Flasim per informacion mjekesor, partneritete dhe produkte.</h2>
          <p>
            Per pyetje rreth produkteve, bashkepunimeve ose informacioneve te
            pergjithshme, na shkruani permes formularit. Ekipi yne do ta
            shqyrtoje mesazhin me kujdes.
          </p>
        </div>

        <div className="contact-response-card" aria-label="Pergjigje">
          <span>Ozzo Pharm</span>
          <strong>Pergjigje profesionale dhe e organizuar.</strong>
          <p>
            Mesazhet kategorizohen sipas temes qe te marrin vemendjen e duhur
            nga ekipi perkates.
          </p>
        </div>
      </section>

      <section className="contact-layout">
        <aside className="contact-sidebar" aria-label="Informacion kontakti">
          <div className="contact-note">
            <strong>Si mund t'ju ndihmojme?</strong>
            <span>Zgjidhni nje teme dhe dergoni sa me shume detaje te dobishme.</span>
          </div>

          <div className="contact-topic-list">
            {contactTopics.map((topic, index) => (
              <div key={topic}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{topic}</strong>
              </div>
            ))}
          </div>

          <div className="contact-social">
            <h3>Na ndiqni</h3>
            <div>
              {socialLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.name}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                >
                  <span>{link.initial}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </aside>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <div className="contact-form-heading">
            <span className="eyebrow">Formulari</span>
            <h3>Dergo mesazhin tuaj</h3>
          </div>

          <label>
            Emri i plote
            <input type="text" placeholder="Emri dhe mbiemri" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="email@example.com" required />
          </label>
          <label>
            Subjekti
            <input type="text" placeholder="Si mund t'ju ndihmojme?" />
          </label>
          <label>
            Mesazhi
            <textarea placeholder="Shkruani mesazhin tuaj" />
          </label>
          <button className="messagebtn" type="submit">
            Dergo mesazhin
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
