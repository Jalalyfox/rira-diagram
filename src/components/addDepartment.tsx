import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/useTypedSelector'; 
import { addDepartmentThunk } from '../features/departmentsSlice';

const AddDepartment: React.FC = () => {
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(addDepartmentThunk({ name }));
    setName(''); // Clear input after submission
  };

  return (
    <div className="my-4 flex items-center space-x-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Department Name"
      />
      <button
        onClick={handleSubmit}
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Department
      </button>
    </div>
  );
};

export default AddDepartment;
