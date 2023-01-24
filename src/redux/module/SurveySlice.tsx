import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SurveyData = {
  id: Date.now(),
  company: "naver",
  commute: 0,
  convenient: 0,
  restaurant: 0,
  pros1: false,
  pros2: false,
  pros3: false,
  pros4: false,
  pros5: false,
  cons1: false,
  cons2: false,
  cons3: false,
  cons4: false,
  cons5: false,
};

export const surveySlice = createSlice({
  name: "surveyData",
  initialState,
  reducers: {
    commuteState(state, action: PayloadAction<commuteData>) {
      return (state = { ...state, commute: action.payload.commute });
    },
    convenientState(state, action: PayloadAction<convenientData>) {
      return (state = { ...state, convenient: action.payload.convenient });
    },
    restaurantState(state, action: PayloadAction<restaurantData>) {
      return (state = { ...state, restaurant: action.payload.restaurant });
    },
  },
});

export const { commuteState, convenientState, restaurantState } =
  surveySlice.actions;

export default surveySlice.reducer;
