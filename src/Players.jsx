import React, { useState } from 'react';
import Player from './Player';
import {Grid} from '@mui/material'

export default function Players() {
  const [colors, setColors] = useState([{color:"Select", player:0}, {color:"red", player:0}, {color:"yellow", player:0}, {color:"blue", player:0}, {color:"green", player:0}]);
  const changeColor = (newColor) => {
    setColors(newColor);
  }

  return (
    <Grid container spacing={12}>
      <Grid item xs={6}>
        <Player playerNumber={1} changeColor={changeColor} colors={colors}/>
      </Grid>
      <Grid item xs={6}>
        <Player playerNumber={2} changeColor={changeColor} colors={colors}/>
      </Grid>
      <Grid item xs={6}>
        <Player playerNumber={3} changeColor={changeColor} colors={colors}/>
      </Grid>
      <Grid item xs={6}>
        <Player playerNumber={4} changeColor={changeColor} colors={colors}/>
      </Grid>
    </Grid>
  );
}

