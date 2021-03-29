import React, { useState,useEffect } from 'react';
import CoinData from './coin-data';

const apiURL="https://api.nomics.com/v1/currencies/ticker?key=7986da46df6f3c84a80abcb10f1f7c73&ids=BTC,ETH,XRP&interval=1d,30d&convert=";





const CoinList = (props) => {
    const [jsonData,setjsonData] = useState({coins:[]});
    
    useEffect(()=>{
        APIcall();

    },[props.currency]);

    const APIcall = async () => {
        const response = await fetch(apiURL+props.currency);
        const jsonFormat = await response.json();
        setjsonData({coins:jsonFormat});
    };

    return ( 
        <React.Fragment>
            {jsonData.coins.map(item=>{
                return <CoinData key={item.id} item={item} currency={props.currency}/>
            } )}
        </React.Fragment>
    );
}
 
export default CoinList;