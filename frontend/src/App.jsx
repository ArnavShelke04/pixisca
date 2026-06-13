import { useState } from "react";
import "./App.css";
import PixelArt from "./components/PixelArt";
import ColorPicker from "./components/ColorPicker";

function App() {
  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 20.0;
  const ZOOM_SPEED = 0.1;
  const [color, setColor] = useState("#9b59b6"); // Default color
  const [zoom, setZoom] = useState(1);
  const [origin, setOrigin] = useState("center");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Mouse position relative to the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setOrigin(`${x}px ${y}px`);
  };

  const handleZoom = (e) => {
    e.preventDefault();
    const zoomDirection = e.deltaY < 0 ? 1 : -1;

    setZoom((prevZoom) => {
      const nextZoom = prevZoom + zoomDirection * ZOOM_SPEED;
      const clampedZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, nextZoom));

      return clampedZoom;
    });
  };

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        onWheel={handleZoom}
        className="relative w-screen h-screen overflow-clip"
      >
        <div style={{ transform: `scale(${zoom})`, transformOrigin: origin }}>
          <PixelArt color={color} />
        </div>
        <div className="fixed z-10 top-0 left-0 p-4">
          <ColorPicker color={color} setColor={setColor} />
        </div>
      </div>
    </>
  );
}

export default App;
