import {Grid} from "@mui/material"
import Players from "./Players";

function App() {
  return (
    <div>
      <Grid container direction='row' justifyContent="center" alignItems="center">
        <h1>Game Lobby</h1>
      </Grid>
      <Grid container direction='row' justifyContent="center" alignItems="center">
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Players/>
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </div>
  );
}

export default App;
