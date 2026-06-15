import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
 import App from './App.js';
 import About from './Main.tsx';
 import Products from "./Products.tsx";
import Contact from "./Contact.tsx";
import Partners from "./Partners.tsx"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter >
    <App />
  </BrowserRouter>
);

reportWebVitals();
