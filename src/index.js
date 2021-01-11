import React from "react";
import ReactDOM from "react-dom";
// import BomDia from "./componentes/BomDia";
// import { BoaTarde, BoaNoite } from "./componentes/multiplos";
// import Multi from "./componentes/multiplos"; usar Multi.BoaTarde
// import Saudacao from "./componentes/saudacao";
// import Filho from "./componentes/filho";
import Filho from "./componentes/filho";
import Pai from "./componentes/pai";

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="Paulo" />
      <Filho nome="Carla" />
      {/*nome carla sobrescreve o nome do pai*/}
      {/* <Filho {...props} nome="Carla" />; */}
    </Pai>
  </div>,

  document.getElementById("root")
);
