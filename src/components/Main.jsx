import React, { useState } from "react";
import Title from "./Title";
import Stats from "./Stats";
import Country from "./Country";

const Main = () => {
  const [date, setDate] = useState(new Date());
  const [country, setCountry] = useState("Afghanistan");
  const [title, setTitle] = useState("Global");

  function handleDateChange(d) {
    setDate(d);
  }

  function handleCountryChange(ctry) {
    setCountry(ctry);
    setTitle(ctry);
  }

  function handleClearCountry() {
    setCountry("Afghanistan");
    setTitle("Global");
  }

  return (
    <>
      <Title title={title} date={date} />
      <Stats requestFor={title} onChangeDate={handleDateChange} />

      <Country
        country={country}
        onChangeCountry={handleCountryChange}
        onClickClear={handleClearCountry}
      />
    </>
  );
};

export default Main;
