import React from "react";

interface LineProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

const Line: React.FC<LineProps> = ({ start, end }) => {
  const offsetX = 95;

  return (
    <svg
      className="absolute top-2 w-full h-full pointer-events-none"
    >
      <line
        x1={start.x + offsetX} 
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Line;
