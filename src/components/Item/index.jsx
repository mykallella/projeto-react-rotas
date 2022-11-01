import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './index.css'
import React, { useEffect, useState } from "react";

export default function Item({ titulo, subtitulo, consoleMaroto }) {
  const [count, setCount] = useState(0)

  useEffect (() => {    
    return () => console.log("Componente desmontado")      
  }, [])

  return (
    <Card sx={{ minWidth: 275, margin: "1em"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {subtitulo}
        </Typography>
        <Typography variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2">
          lalala  
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={consoleMaroto}>Botão</Button>
      </CardActions>
      {count}
      <button onClick={() => setCount(count+1)}>Atualizar</button>
    </Card>
  );
}


