import React from "react";
import '../hojas-de-estilo/Bottom.css'

function Bottom({ texto, esBotonDeClic, manejarClic }) {
  return <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
  onClick={manejarClic}
  >
    {texto}
    
    </button>;
}

export default Bottom