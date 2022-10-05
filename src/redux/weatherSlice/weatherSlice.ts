import { createSlice } from "@reduxjs/toolkit";
import weatherOperations from "./weatherOperations";

interface IState {
  currentCity: string;
  weatherData: [];
  loading: boolean;
  error: null | string;
}

const initialState: IState = {
  currentCity: "Kyiv",
  weatherData: [],
  loading: false,
  error: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        weatherOperations.weatherCurrentCityOnWeek.pending,
        (state, action) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addCase(
        weatherOperations.weatherCurrentCityOnWeek.fulfilled,
        (state, action) => {
          state.loading = false;
          state.error = null;
          console.log(action.payload);
        }
      )
      .addCase(
        weatherOperations.weatherCurrentCityOnWeek.rejected,
        (state, action) => {
          state.loading = false;
          state.error = "Error";
        }
      );
  },
});

export default weatherSlice.reducer;
