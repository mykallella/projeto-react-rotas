import React, { useState } from "react";
import Item from "../components/Item/";

export default function News() {
  const [hideItem, setHideItem] = useState(false); // Se 'true' o componente sumirá

  var noticias = [
    { titulo: "Título 1", subtitulo: "Subtítulo 1" },
    { titulo: "Título 2", subtitulo: "Subtítulo 2" },
  ];

  return (
    <div>
      {/* Se 'hideItem' false, exibe/renderiza componente, senão 'null'(não exibe) */}
      {hideItem == false
        ? noticias.map((noticia, key) => (
            <Item
              key={key}
              titulo={noticia.titulo}
              subtitulo={noticia.subtitulo}
            />
          ))
        : null}

      {/* Ao clicar, inverte estado do 'hideItem' (true ou false) */}
      <button onClick={() => setHideItem(!hideItem)}>
        {/* Se 'hideItem' false, o label do botão é 'Xumir', senão é 'Aparecer' */}
        {hideItem == false ? "Xumir" : "Aparecer"}
      </button>
    </div>
  );
}


