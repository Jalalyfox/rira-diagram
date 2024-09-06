import React, { useEffect, useState } from 'react';
import Card from './card';
import Line from './line';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useAppDispatch } from '../hooks/useTypedSelector';
import { updateDepartmentPosition } from '../features/departmentsSlice';
import { fetchDepartmentsThunk } from '../features/departmentsSlice';

const Diagram: React.FC = () => {
  const dispatch = useAppDispatch();
  const departments = useTypedSelector((state) => state.departments.list);
  const [companyPosition, setCompanyPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    dispatch(fetchDepartmentsThunk());
  }, [dispatch]);

  const handleDragEnd = (newPosition: { x: number; y: number }, departmentId?: number) => {
    if (departmentId) {
      dispatch(updateDepartmentPosition({ id: departmentId, position: newPosition }));
    } else {
      setCompanyPosition(newPosition);
    }
  };

  return (
    <div className="relative h-screen bg-gray-100 p-4">
      <Card
        name="Company"
        position={companyPosition}
        // onDragEnd={(position) => handleDragEnd(position)}
      />
      {departments.map((dep) => (
        <React.Fragment key={dep.id}>
          <Card
            name={dep.name}
            position={dep.position}
            onDragEnd={(position) => handleDragEnd(position, dep.id)}
          />
          <Line start={companyPosition} end={dep.position} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Diagram;