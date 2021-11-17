import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("red");
  const styles = { backgroundColor: color };
  //const colors = 
  const [colors, setColors] = useState(["teal", "orange", "lavender"]);
  return (
    <div>
      <TextField onChange={(event) => setColor(event.target.value)}
        value={color}
        style={styles} id="standard-basic" label="Enter a color" variant="standard" />

      <Button onClick={() => setColors([...colors, color])} variant="outlined">Add Color</Button>

      {colors.map((clr) => <ColorBox color={clr} />
      )}
    </div>
  );
}
