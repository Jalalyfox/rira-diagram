import React from 'react';

interface CardProps {
  name: string;
  position: { x: number, y: number };
  onDragEnd?: (position: { x: number, y: number }) => void;
}

const Card: React.FC<CardProps> = ({ name, position, onDragEnd }) => {
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const newX = e.clientX;
    const newY = e.clientY;
    onDragEnd && onDragEnd({ x: newX, y: newY });
  };

  return (
    <div 
      draggable 
      onDragEnd={handleDragEnd}
      className="p-4 bg-white shadow-md rounded-lg absolute cursor-pointer"
      style={{ left: position.x, top: position.y }}
    >
      <p className="text-lg font-semibold text-center">{name}</p>
    </div>
  );
};

export default Card;
