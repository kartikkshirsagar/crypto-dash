import React, { useState, useEffect } from "react";
import CoinData from "./coin-data";

const apiURL =
  "https://api.nomics.com/v1/currencies/ticker?key=7986da46df6f3c84a80abcb10f1f7c73&interval=1d&convert=INR&sort=rank&per-page=20&page=1";

const CoinList = () => {
  const [jsonData, setjsonData] = useState({ coins: [] });

  useEffect(() => {
    APIcall();
  }, []);

  const APIcall = async () => {
    const response = await fetch(apiURL );
    const jsonFormat = await response.json();
    setjsonData({ coins: jsonFormat });
  };

  return (
    <React.Fragment> 
        {jsonData.coins.map((item) => {
            
          return <CoinData key={item.id} item={item} />;
        })}
    </React.Fragment>
  );
};

export default CoinList;
