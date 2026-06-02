import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  function handleOnChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h2>Color Selector</h2>
      <label>Select Color: </label>
      <input type="color" value={color} onChange={handleOnChange} />
    </div>
  );
}

export default ColorPicker;
