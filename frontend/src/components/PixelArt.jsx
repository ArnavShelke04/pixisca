import { useState } from "react";

function PixelArt({ color }) {
  const gridSize = 256;
  const [grid, setGrid] = useState(() =>
    Array(gridSize * gridSize).fill("#fff"),
  );

  const handleCellClick = (index) => {
    const newGrid = [...grid];
    newGrid[index] = color;
    setGrid(newGrid);
  };

  return (
    <div
      className="grid w-[100rem] h-[100rem]"
      style={{ gridTemplateColumns: `repeat(${gridSize},1fr)` }}
    >
      {grid.map((color, index) => {
        return (
          <div
            key={index}
            className="border"
            onClick={() => handleCellClick(index)}
            style={{ background: color }}
          ></div>
        );
      })}
    </div>
  );
}

export default PixelArt;
