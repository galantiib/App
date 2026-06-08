import { useState } from "react";
import { Layout } from "./Layout.tsx";

const slides = [
  {
    title: "Misioni Ynë",
    text: "Të ofrojmë produkte farmaceutike të sigurta, efektive dhe të certifikuara ndërkombëtarisht që përmirësojnë jetën e pacientëve."
  },
  {
    title: "Vizioni",
    text: "Të bëhemi një lider rajonal në industrinë farmaceutike përmes inovacionit dhe standardeve të larta shkencore."
  },
  {
    title: "Vlerat",
    text: "Integritet, cilësi, transparencë dhe përkushtim maksimal ndaj shëndetit të njeriut."
  }
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <Layout>
      <section className="sectiong">
        <h2 className="ozzo3">
          Rreth <span className="ozzo2">Ozzo</span>Pharm
        </h2>

        <p>
          Ozzo Pharm është një kompani farmaceutike e përkushtuar për të çuar
          përpara kujdesin shëndetësor global{" "}
          <span className="pspan">
            përmes inovacionit, integritetit shkencor dhe përsosmërisë.
          </span>
        </p>
        <p>
          Zhvillimi ynë i bazuar në kërkime siguron që çdo produkt të përmbushë
          standardet rregullatore{" "}
          <span className="pspan1">
            ndërkombëtare dhe të ofrojë vlerë të matshme për pacientin.
          </span>
        </p>
        <p>
          Ne bashkëpunojmë ngushtë me profesionistë të kujdesit shëndetësor për
          të përmirësuar jetën përmes ilaçeve{" "}
          <span className="pspan2">
            të sigurta, efektive dhe të arritshme.
          </span>
        </p>
      </section>

        <div className="carousel-section">
  <div className="carousel">
    <div className="carousel-card">
      <button className="carousel-arrow left" onClick={() => setIndex((index + 2) % 3)}>‹</button>
      <h3>{slides[index].title}</h3>
      <p>{slides[index].text}</p>
      <button className="carousel-arrow right" onClick={() => setIndex((index + 1) % 3)}>›</button>
    </div>
  </div>
</div>

    </Layout>
  );
};

export default About;