import React from 'react';
import Diagram from '../components/diagram';
import AddDepartment from '../components/addDepartment';

const DiagramPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Company Diagram</h1>
      <AddDepartment />
      <Diagram />
    </div>
  );
};

export default DiagramPage;