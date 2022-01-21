import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DropdownButton from './DropdownButton'
import Typography from '@mui/material/Typography';

export default function Player(props) {
  return (
	<Card>
	  <CardContent>
      <Typography variant="h5" component="div">
        Player {props.playerNumber}
      </Typography>
	  </CardContent>
	  <CardActions>
		  <DropdownButton playerNumber={props.playerNumber} changeColor={props.changeColor} colors={props.colors}/>
	  </CardActions>
	</Card>
  );
}
