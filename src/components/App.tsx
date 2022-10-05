import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import weatherOperations from "../redux/weatherSlice/weatherOperations";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(weatherOperations.weatherCurrentCityOnWeek());
  }, []);

  return <div className="App"></div>;
}

export default App;
