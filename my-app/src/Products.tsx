import { Layout } from "./Layout.tsx";
import { useNavigate } from "react-router-dom";


const Products = () => {

const navigate = useNavigate();

const Mossi = () =>{
navigate("/mossi")
}

const Bronho = () =>{
navigate("/bronho")
}

const Carbo = () =>{
navigate("/carbo")
}

const Flexo = () =>{
navigate("/flexo")
}

const Fornos = () =>{
navigate("/fornos")
}

const Imuno = () =>{
navigate("/imuno")
}

const Ginginox  = () =>{
navigate("/ginginox")
}
const Hemo = () =>{
navigate("/hemo")
}

const Cardio = () =>{
navigate("/cardio")
}

const Daily = () =>{
navigate("/daily")
}

const dotSpot = () =>{
navigate("/dot")
}

const Forvax = () =>{
navigate("/forvax")
}

const Fero = () =>{
navigate("/fero")
}

const miVita = () =>{
navigate("/mivita")
}

const Neuro = () =>{
navigate("/neuro")
}

const Propo = () =>{
navigate("/propo")
}

const Rexidro = () =>{
navigate("/rexidro")
}

const Magnez = () =>{
navigate("/magnez")
}

const uriBlock = () =>{
navigate("/uriblock")
}

const Aloe = () =>{
navigate("/aloe")
}

const Veno = () =>{
navigate("/veno")
}



  return (
    <Layout>
      <section className="section">
        <h2>Produktet </h2>
        <p>
          Ozzo Pharm ofron një portofol të larmishëm farmaceutik të prodhuar sipas standardeve të rrepta të GMP-së dhe sigurimit të cilësisë.
        </p>
        <div className="grid">
          <div onClick={Mossi} className="card">
            <h3>The Mossi London</h3>
          </div>
          <div onClick={Bronho} className="card">
            <h3>BronhoMax</h3>
          </div>
          <div onClick={Carbo} className="card">
            <h3>CarboSil</h3>
          </div>
          <div onClick={Flexo} className="card">
            <h3>Flexo</h3>
          </div>
          <div onClick={Fornos} className="card">
            <h3>Fornos</h3>
          </div>
          <div onClick={Imuno} className="card">
            <h3>Imuno SUPER BOOSTER</h3>
          </div>
          <div onClick={Ginginox} className="card">
            <h3>Ginginox</h3>
          </div>
          <div onClick={Hemo} className="card">
            <h3>HemoMax</h3>
          </div>
          <div onClick={Cardio} className="card">
            <h3>CardioMix</h3>
          </div>
          <div onClick={Daily} className="card">
            <h3>Daily D</h3>
          </div>
          <div onClick={dotSpot} className="card">
            <h3>Dot Spot</h3>
          </div>
          <div onClick={Forvax} className="card">
            <h3>Forvax C</h3>
          </div>
          <div onClick={Fero} className="card">
            <h3>Fero Blue</h3>
          </div>
          <div onClick={miVita} className="card">
            <h3>MiVita</h3>
          </div>
          <div onClick={Neuro} className="card">
            <h3>Neurospin</h3>
          </div>
          <div onClick={Propo} className="card">
            <h3>PropoMax</h3>
          </div>
          <div onClick={Rexidro} className="card">
            <h3>RexidroSol</h3>
          </div>
          <div onClick={Magnez} className="card">
            <h3>TriMagnezij</h3>
          </div>
          <div onClick={uriBlock} className="card">
            <h3>UriBlock</h3>
          </div>
          <div onClick={Aloe} className="card">
            <h3>AloeVera</h3>
          </div>
          <div onClick={Veno} className="card">
            <h3>VenoMax</h3>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;




