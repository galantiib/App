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
            <span>
              Ekipi ynë do ta shqyrtojë mesazhin dhe do t'ju kontaktojë sa më shpejt.
            </span>
          </div>

          {/* SOCIAL LINKS */}
          {/* SOCIAL LINKS */}
{/* SOCIAL LINKS */}
<div style={{ marginTop: "20px" }}>
  <h3>Na ndiqni</h3>

  <div style={{ display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap" }}>
    
    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=100093653766220"
      target="_blank"
      rel="noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 14px",
        background: "#1877F2",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: 500,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>
      </svg>
      Facebook
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/ozzopharm/"
      target="_blank"
      rel="noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 14px",
        background: "#E1306C",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: 500,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>
      </svg>
      Instagram
    </a>

  

  </div>
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
          <button className="messagebtn" type="submit">
            Dërgo mesazhin
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;