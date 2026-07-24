import { Routes, Route, Navigate } from "react-router-dom";
import About from "./Main.tsx";
import Products from "./Products.tsx";
import Contact from "./Contact.tsx";
import Partners from "./Partners.tsx";
import Keshilla from "./Keshilla.tsx";
import Locations from "./Locations.tsx";
import Mossi from "./products/Mossi.tsx";
import Bronho from "./products/Bronho.tsx";
import Carbo from "./products/Carbo.tsx";
import Flexo from "./products/Flexo.tsx";
import Ginginox from "./products/Ginginox.tsx";
import DotSpot from "./products/DotSpot.tsx";
import Forvax from "./products/Forvax.tsx";
import MiVita from "./products/MiVita.tsx";
import Neuro from "./products/Neuro.tsx";
import Rexidro from "./products/Rexidro.tsx";
import Magnez from "./products/Magnez.tsx";
import UriBlock from "./products/UriBlock.tsx";
import Aloe from "./products/Aloe.tsx";
import Sinu from "./products/Sinu.tsx";
import Lardii from "./products/Lardii.tsx";
import Total from "./products/Total.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/about" />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/keshilla" element={<Keshilla />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/mossi" element={<Mossi />} />
      <Route path="/bronho" element={<Bronho />} />
      <Route path="/carbo" element={<Carbo />} />
      <Route path="/flexo" element={<Flexo />} />
      <Route path="/ginginox" element={<Ginginox />} />
      <Route path="/dot" element={<DotSpot />} />
      <Route path="/forvax" element={<Forvax />} />
      <Route path="/mivita" element={<MiVita />} />
      <Route path="/neuro" element={<Neuro />} />
      <Route path="/rexidro" element={<Rexidro />} />
      <Route path="/magnez" element={<Magnez />} />
      <Route path="/uriblock" element={<UriBlock />} />
      <Route path="/aloe" element={<Aloe />} />
      <Route path="/sinu" element={<Sinu />} />
      <Route path="/lardii" element={<Lardii />} />
      <Route path="/total" element={<Total />} />
    </Routes>
  );
}

export default App;
