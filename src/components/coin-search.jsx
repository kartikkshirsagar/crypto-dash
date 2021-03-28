import React, { useState,useEffect } from 'react';
import CoinData from './coin-data';

const apiURL="https://api.nomics.com/v1/currencies/ticker?key=7986da46df6f3c84a80abcb10f1f7c73&interval=1d,30d&convert=EUR&per-page=100&page=1";

const CoinSearch = () => {
    const [jsonData,setjsonData] = useState({coins:[]});
    const [query,setQuery] =useState('bitcoin');
    
    
    useEffect(()=>{
        APIcall();
    },[]);

    const APIcall = async () => {
        const response = await fetch(apiURL);
        const jsonFormat = await response.json();
        setjsonData({coins:jsonFormat});
    };


    return ( 
        <React.Fragment>
            <input type='text' value={query} onChange={event=>setQuery(event.target.value)}></input>

            {jsonData.coins.map(item=>{
                return <CoinData name={item.name} id={item.id} price={item.price}/>
            } )}
        </React.Fragment>
    );
}
 
export default CoinSearch;