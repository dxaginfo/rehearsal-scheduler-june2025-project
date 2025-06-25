import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import bandReducer from './slices/bandSlice';
import rehearsalReducer from './slices/rehearsalSlice';
import availabilityReducer from './slices/availabilitySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    band: bandReducer,
    rehearsal: rehearsalReducer,
    availability: availabilityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
