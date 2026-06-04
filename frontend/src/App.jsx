import { useState } from "react";
import "./App.css";
import PixelArt from "./components/PixelArt";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [color, setColor] = useState("#9b59b6"); // Default color

  return (
    <>
      <ColorPicker color={color} setColor={setColor} />
      <PixelArt color={color} />
    </>
  );
}

export default App;
