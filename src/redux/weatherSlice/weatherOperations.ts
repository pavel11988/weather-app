import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IDataCurrentCity } from "../../models/IDataCurrentCity";

const weatherCurrentCityOnWeek = createAsyncThunk<
  IDataCurrentCity,
  undefined,
  { rejectValue: string }
>("weather/currentCityOnWeek", async (_, { rejectWithValue }) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=0b1b7f85e02b3205e76954aed8bb9c0c"
  );
  if (!response) {
    return rejectWithValue("Error");
  }
  return response.data;
});

const weatherOperations = {
  weatherCurrentCityOnWeek,
};

export default weatherOperations;
