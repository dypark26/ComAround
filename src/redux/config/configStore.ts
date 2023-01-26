import { configureStore } from '@reduxjs/toolkit';
import surveyData from '../module/SurveySlice';

export const store = configureStore({
  reducer: {
    surveyData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
