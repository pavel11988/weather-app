import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice/weatherSlice";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
