import {  Routes, Route, Navigate } from "react-router-dom";
import About from "./Main.tsx";
import Products from "./Products.tsx";
import Contact from "./Contact.tsx";
import Partners from "./Partners.tsx"
import Mossi from "./products/Mossi.tsx";
import Bronho from "./products/Bronho.tsx";
import Carbo from "./products/Carbo.tsx";
import Flexo from "./products/Flexo.tsx";
import Fornos from "./products/Fornos.tsx";
import Imuno from "./products/Imuno.tsx";
import Ginginox from "./products/Ginginox.tsx";
import Hemo from "./products/Hemo.tsx";
import Cardio from "./products/Cardio.tsx";
import Daily from "./products/Daily.tsx";
import DotSpot from "./products/DotSpot.tsx";
import Forvax from "./products/Forvax.tsx";
import Fero from "./products/Fero.tsx";
import MiVita from "./products/MiVita.tsx";
import Neuro from "./products/Neuro.tsx";
import Propo from "./products/Propo.tsx";
import Rexidro from "./products/Rexidro.tsx";
import Magnez from "./products/Magnez.tsx";
import UriBlock from "./products/UriBlock.tsx";
import Aloe from "./products/Aloe.tsx";
import Veno from "./products/Veno.tsx";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/mossi" element={<Mossi />} />
        <Route path="/bronho" element={<Bronho />} />
        <Route path="/carbo" element={<Carbo />} />
        <Route path="/flexo" element={<Flexo />} />
        <Route path="/fornos" element={<Fornos />} />
        <Route path="/imuno" element={<Imuno />} />
        <Route path="/ginginox" element={<Ginginox />} />
        <Route path="/hemo" element={<Hemo />} />
        <Route path="/cardio" element={<Cardio />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/dot" element={<DotSpot />} />
        <Route path="/forvax" element={<Forvax />} />
        <Route path="/fero" element={<Fero />} />
        <Route path="/mivita" element={<MiVita />} />
        <Route path="/neuro" element={<Neuro />} />
        <Route path="/propo" element={<Propo />} />
        <Route path="/rexidro" element={<Rexidro />} />
        <Route path="/magnez" element={<Magnez />} />
        <Route path="/uriblock" element={<UriBlock />} />
        <Route path="/aloe" element={<Aloe />} />
        <Route path="/veno" element={<Veno />} />
      </Routes>
  );
}

export default App;
