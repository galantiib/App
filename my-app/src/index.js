import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
 import App from './App.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter basename='/App'>
    <App />
  </HashRouter>
);

reportWebVitals();
