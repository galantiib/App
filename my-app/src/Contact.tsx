import { Layout } from "./Layout.tsx";

const Contact = () => {
  return (
    <Layout>
      <section className="section">
        <h2>Na Kontaktoni</h2>
        <p>
          Për informacion mjekësor, partneritete ose pyetje të përgjithshme, ju lutemi të na kontaktoni duke përdorur formularin më poshtë.
        </p>

        <form>
          <input type="text" placeholder="Emri i Plotë" required />
          <input type="email" placeholder="Email " required />
          <input type="text" placeholder="Subjekti" />
          <textarea placeholder="Mesazhi yt " />
          <button className="messagebtn" type="submit">Dërgo</button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;



