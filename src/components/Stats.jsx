import React, { useState, useEffect } from "react";

const Stats = ({ requestFor, onChangeDate }) => {
  const [newCases, setNewCases] = useState(0);
  const [newDeaths, setNewDeaths] = useState(0);
  const [totalCases, setTotalCases] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);

  function requestFulfilled(
    date,
    new_cases,
    new_deaths,
    total_cases,
    total_deaths
  ) {
    onChangeDate(date);
    setNewCases(new_cases);
    setNewDeaths(new_deaths);
    setTotalCases(total_cases);
    setTotalDeaths(total_deaths);
  }

  function requestNotFulfilled() {
    onChangeDate(new Date());
    setTotalCases(0);
    setTotalDeaths(0);
  }

  async function fetchCovidData() {
    const res = await fetch(`https://api.covid19api.com/summary`);
    const data = await res.json();
    if (requestFor === "Global") {
      let globalData = data.Global;
      if (data.Global) {
        requestFulfilled(
          globalData.Date,
          globalData.NewConfirmed,
          globalData.NewDeaths,
          globalData.TotalConfirmed,
          globalData.TotalDeaths
        );
      } else if (!data.success) {
        requestNotFulfilled();
      }
    } else {
      let countryData = "";
      countryData = data.Countries.find((ctry) => ctry.Country === requestFor);
      // console.log(countryData);

      if (countryData.Country) {
        requestFulfilled(
          countryData.Date,
          countryData.NewConfirmed,
          countryData.NewDeaths,
          countryData.TotalConfirmed,
          countryData.TotalDeaths
        );
      } else {
        requestNotFulfilled();
      }
    }
  }

  useEffect(() => {
    fetchCovidData();
  }, [requestFor]);

  return (
    <div className="flex flex-row justify-center px-10 py-8 text-lg text-center align-center">
      {(!totalCases || !totalDeaths) && <p>Something went wrong! Try again.</p>}
      <div className="p-10 mx-10 bg-blue-200 rounded-lg">
        <p className="my-3">
          <span className="font-bold">New Cases:</span> {newCases}
        </p>
        <p className="my-3">
          <span className="font-bold">Total Cases:</span> {totalCases}
        </p>
      </div>
      <div className="p-10 mx-10 bg-blue-200 rounded-lg">
        <p className="my-3">
          <span className="font-bold">New Deaths:</span> {newDeaths}
        </p>
        <p className="my-3">
          <span className="font-bold">Total Deaths:</span> {totalDeaths}
        </p>
      </div>
    </div>
  );
};

export default Stats;
