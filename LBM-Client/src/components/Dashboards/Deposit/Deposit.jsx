import React, { useEffect, useRef } from "react";
import { useState } from "react";
<<<<<<< HEAD:LBM-Client/src/components/Dashboards/FinancialMarket/FinancialMarket.jsx
import "./FinancialMarket.scss";
import data from "./data.json";
import Row from "./Row";

export default function FinancialMarket() {
  const [info, setInfo] = useState();
  const [search, setSearch] = useState("");
=======
import "./Deposit.scss";
import data from "./data.json"
import Row from "./Row";

export default function Deposit() {
>>>>>>> 6eb8b60 (User Info-responsive):LBM-Client/src/components/Dashboards/Deposit/Deposit.jsx

  useEffect(() => {
    setInfo(data);
  }, []);

  const filter = (arr, key) => {
    if (key === "") {
      return setInfo(data);
    }
    const filter = [];
    arr.forEach((el) => {
      el.name.includes(key) ? filter.push(el) : null;
    });
    return setInfo({ data: filter });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    filter(data.data, e.target.value);
  };

  return (
    <div className="container2">
      <div className="searchDiv">
        <h1 className="header">Deposit</h1>
        <input
          className="search"
          placeholder="Search"
          name="search"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className="asset">
        <p>Asset</p>
        <p>Wallet</p>
      </div>
      <div className="table">
        {info &&
          info.data.map((el, index) => (
            <Row
              value={true}
              key={index}
              img={el.img}
              name={el.name}
              change={el.change}
              amount={el.amount}
            />
          ))}
      </div>
    </div>
  );
}
