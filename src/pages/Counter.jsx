import React, { useEffect, useState } from "react";

export default function Counter() {
  const [contador, setContador] = useState(0);

  // useEffect é chamado toda vez que o componente é MONTADO ou ATUALIZADO
  useEffect(() => {

    // console.log("Olha que louco")
    // return () => console.log("Componente desmontado") // Faz só quando componente é DESMONTADO

  }, []) // com esse segundo parâmetro vazio, o useEffect é chamado só quando componente é MONTADO, mas NÃO é chamado quando é ATUALIZADO (pq não especifiquei um estado(variável) para se atrelar e prestar atenção quando este tal for atualizado)

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <div style={{marginLeft: "2em"}}>
        <h1>{contador}</h1>
        <button onClick={incrementar}>Aumentar</button>
      </div>
    </div>
  );
}

