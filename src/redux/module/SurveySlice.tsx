import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SurveyData = {
  id: Date.now(),
  company: "",
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
    starState(state, action: PayloadAction<starData>) {
      const { name, rating } = action.payload;
      const newState: any = { ...state };
      newState[name] = rating;
      return newState;
    },
    prosConsState(state, action: PayloadAction<prosConsData>) {
      const { name } = action.payload;
      const newState: any = { ...state };
      newState[name] = !newState[name];
      return newState;
    },
  },
});

export const { starState, prosConsState } = surveySlice.actions;

export default surveySlice.reducer;
