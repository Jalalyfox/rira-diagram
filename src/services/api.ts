import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchDepartments = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`); // Using /users as a mock for departments
    return response.data;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
};

export const addDepartmentApi = async (department: { name: string }) => {
  try {
    const response = await axios.post(`${API_URL}/users`, department); // Using /users as a mock endpoint
    return response.data;
  } catch (error) {
    console.error('Error adding department:', error);
    throw error;
  }
};
