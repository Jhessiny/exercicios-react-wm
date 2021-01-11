import React from "react";

export const BoaTarde = (props) => <h1>Boa tarde, {props.name}</h1>;
export const BoaNoite = (props) => <h1>Boa noite, {props.name}</h1>;

//sem export default precisa de const ou let
//default - funcao anonima

// const BoaTarde = (props) => <h1>Boa tarde, {props.name}</h1>;
// const BoaNoite = (props) => <h1>Boa noite, {props.name}</h1>;
// export default BoaTarde;
// export default {BoaTarde, BoaNoite};
