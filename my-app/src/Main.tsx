 import { useEffect, useState } from "react";
 import { Layout } from "./Layout.tsx";
 
 const slides = [
   {
     image: "/partners/pictures/vitamin.png",
     alt: "Slide 1"
   },
   {
     image: "/partners/pictures/neuro.png",
     alt: "Slide 2"
   },
   {
     image: "/partners/pictures/surup1.png",
     alt: "Slide 3"
   },
   {
     image: "/partners/pictures/carbo.png",
     alt: "Slide 4"
   },
   {
     image: "/partners/pictures/uriblock.png",
     alt: "Slide 5"
   },
   {
     image: "/partners/pictures/forvax.png",
     alt: "Slide 5"
   }
 ];



const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

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

            <img
              src={slides[index].image}
              alt={slides[index].alt}
              className="carousel-img"
            />

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;