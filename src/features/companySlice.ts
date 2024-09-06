import { createSlice } from '@reduxjs/toolkit';

interface CompanyState {
  name: string;
}

const initialState: CompanyState = {
  name: 'My Company',
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setName } = companySlice.actions;
export default companySlice.reducer;
