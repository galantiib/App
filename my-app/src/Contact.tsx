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
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" />
          <button className="messagebtn" type="submit">Send Message</button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;



