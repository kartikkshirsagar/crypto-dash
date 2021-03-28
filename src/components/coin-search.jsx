import React, { useState,useEffect } from 'react';
import CoinData from './coin-data';
import coinNames from '../currency';

const apiURL="https://api.nomics.com/v1/currencies/ticker?key=7986da46df6f3c84a80abcb10f1f7c73&interval=1d,30d&convert=EUR&per-page=100&page=1";
var query_part1 ="https://api.nomics.com/v1/currencies/ticker?key=7986da46df6f3c84a80abcb10f1f7c73&ids=" ;
var query_part2="&interval=1d&convert=EUR";

const CoinSearch = () => {
    const [jsonData,setjsonData] = useState(null);
    const [query,setQuery] =useState('BTC');

    //useEffect(()=>{
        //APIcall();
        //var Q=getCoinData(query);
        //if(Q!=null){
        //    QueryAPIcall(Q);
        //}
    //},[query]);

    

    const QueryAPIcall = async (url) => {
        const response = await fetch(url);
        
        const data = await response.json();

        if(data!=null && data[0]!=null){
        console.log(response);
        console.log(data);
        setjsonData(data[0]);
        console.log(data[0].id);
        }

    };

    const runAPI= ()=>{
        var url=query_part1+coinNames[query]+query_part2;
        QueryAPIcall(url);
    };

    return ( 
        <React.Fragment>
            <input type='text' value={query} onChange={event=>setQuery(event.target.value)}></input>
            <input type='button' onClick={()=>{runAPI()}}/>
            {/*{jsonData.coins.map((item,index)=>{
                if(item.name===query){
                    console.log(item);
                    return <CoinData name={item.name} id={item.id} price={item.price} key={index}/>
                }
                else{
                    return null;
                }
            } )}*/}
            { jsonData!=null &&
            <CoinData key={jsonData.id} item={jsonData}/>}
        </React.Fragment>
    );
}
 
export default CoinSearch;