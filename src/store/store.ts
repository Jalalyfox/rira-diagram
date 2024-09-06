import { configureStore } from '@reduxjs/toolkit';
import departmentsReducer from '../features/departmentsSlice';
import companyReducer from '../features/companySlice';

export const store = configureStore({
  reducer: {
    company: companyReducer,
    departments: departmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
