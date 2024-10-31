import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Formulario from './components/Formulario';
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formulario />
  </StrictMode>
);