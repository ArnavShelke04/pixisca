import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#9b59b6"); // Default color

  // Your predefined palette colors
  const paletteColors = [
    { name: "red", hex: "#ef4444" },
    { name: "blue", hex: "#3b82f6" },
    { name: "green", hex: "#22c55e" },
    { name: "purple", hex: "#a855f7" },
  ];

  return (
    <div className="flex justify-center">
      <div className="color-picker-container border-2 flex flex-col p-4 rounded-2xl bg-white shadow-sm">
        <h2 className="text-lg font-bold mb-1">Color Selector</h2>
        <div className="line w-20 bg-red-900 h-1 mb-4 rounded-full"></div>
        
        <p className="text-gray-600 mb-2">Select Color :</p>
        
        <div className="flex items-center gap-3">
          {/* Loop through your beautiful custom buttons */}
          {paletteColors.map((item) => (
            <button
              key={item.name}
              onClick={() => setColor(item.hex)}
              className={`w-8 h-8 rounded-full border-2 transition-transform active:scale-95 ${
                color === item.hex ? "border-black scale-110" : "border-gray-200"
              }`}
              style={{ backgroundColor: item.hex }}
              title={item.name}
            />
          ))}

          {/* The "Plus" button that triggers a hidden color picker */}
          <label className="w-8 h-8 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer hover:border-gray-600 active:scale-95 transition-transform">
            <span className="text-gray-500 text-lg font-bold">+</span>
            <input 
              type="color" 
              value={color} 
              onChange={(e) => setColor(e.target.value)} 
              className="sr-only" // "sr-only" completely hides the ugly input from view
            />
          </label>
        </div>

        {/* Optional preview to see the active color */}
        <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
          Current: <span className="font-mono uppercase font-bold" style={{ color: color }}>{color}</span>
        </div>
      </div>
    </div>
  );
}