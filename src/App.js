import "./App.css";
import Bottom from "./componentes/Bottom";
import Contador from "./componentes/Contador";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import { useState } from "react";

function App() {


  const [numClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics + 1)
  }

  const reiiciarContador = () => {
    setNumClics(0)
  }


  return (
    <div className="App">
      <div className="freedcodecamp-logo-contenedor">
        <img
          className="freedcodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freedCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Bottom texto='clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Bottom
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiiciarContador} />
      </div>
    </div>
  );
}

export default App;
