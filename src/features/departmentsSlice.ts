import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchDepartments, addDepartmentApi } from "../services/api";

interface Department {
  id: number;
  name: string;
  position: { x: number; y: number };
}

interface DepartmentsState {
  list: Department[];
  loading: boolean;
  error: string | null;
}

const initialState: DepartmentsState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchDepartmentsThunk = createAsyncThunk(
  "departments/fetchDepartments",
  async () => {
    const data = await fetchDepartments();
    return data.slice(0, 8).map((user: any) => ({
      id: user.id,
      name: user.name,
      position: { x: Math.random() * 500, y: Math.random() * 500 },
    }));
  }
);

export const addDepartmentThunk = createAsyncThunk(
  "departments/addDepartment",
  async (department: { name: string }) => {
    const data = await addDepartmentApi(department);
    return {
      id: data.id,
      name: data.name,
      position: { x: Math.random() * 500, y: Math.random() * 500 },
    };
  }
);

const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {
    updateDepartmentPosition: (
      state,
      action: PayloadAction<{ id: number; position: { x: number; y: number } }>
    ) => {
      const { id, position } = action.payload;
      const department = state.list.find((dep) => dep.id === id);
      if (department) {
        department.position = position;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartmentsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDepartmentsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchDepartmentsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch departments";
      })
      .addCase(addDepartmentThunk.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export const { updateDepartmentPosition } = departmentsSlice.actions;

export default departmentsSlice.reducer;
