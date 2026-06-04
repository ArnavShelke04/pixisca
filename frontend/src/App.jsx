import { useState } from "react";
import "./App.css";
import PixelArt from "./components/PixelArt";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [color, setColor] = useState("#9b59b6"); // Default color
  const [zoom,setZoom] = useState(1);

  const handleZoom = (e)=>{
    if (e.deltaY < 0) {
      setZoom((currentZoom) => Math.min(currentZoom + 0.1, 4));
    }
    else {
      setZoom((currentZoom) => Math.max(currentZoom - 0.1, 0.5));
    }
  }
  return (
    <>
      <div onWheel={handleZoom} className="relative w-screen h-screen overflow-clip">
        <PixelArt color={color}/>
        <div className="absolute z-10 top-0 left-0" style={{ 
          transform: `scale(${zoom})`, 
        }}>
          <ColorPicker color={color} setColor={setColor}/>
        </div>
      </div>
    </>
  );
}

export default App;
