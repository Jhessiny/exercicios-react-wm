import React from "react";
import ReactDOM from "react-dom";
// import BomDia from "./componentes/BomDia";
// import { BoaTarde, BoaNoite } from "./componentes/multiplos";
// import Multi from "./componentes/multiplos"; usar Multi.BoaTarde
import Saudacao from "./componentes/saudacao";

ReactDOM.render(
  <div>
    <Saudacao />
    <Saudacao />
    <Saudacao />
    <Saudacao />
  </div>,

  document.getElementById("root")
);
