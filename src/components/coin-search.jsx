import React, { useState,useEffect } from 'react';
import CoinData from './coin-data';
import coinNames from '../currency';

const apiURL="https://api.nomics.com/v1/currencies/ticker?key=7986da46df6f3c84a80abcb10f1f7c73&interval=1d,30d&convert=EUR&per-page=100&page=1";
var query_part1 ="https://api.nomics.com/v1/currencies/ticker?key=7986da46df6f3c84a80abcb10f1f7c73&ids=" ;
var query_part2="&interval=1d&convert=EUR";

const CoinSearch = () => {
    const [jsonData,setjsonData] = useState({coins:[]});
    const [query,setQuery] =useState('bitcoin');
    
    const getCoinData= (query_string)=>{
        var ids='';
        var srch_string = '.*'+query_string+'.*';
        console.log(srch_string)
        for (var key of Object.keys(coinNames)){
            if(key.includes(query_string) ){
                ids=ids+coinNames[key]+',';
                console.log('Matched:'+key)
            }
        }
        if (ids!=''){
            ids = ids.substr(0,ids.length-1);
            console.log('idlist:'+ids);
            var final_query=query_part1+ids+query_part2;
            return final_query;
        }
        else{
            return null;
        }
        
    };
    
    useEffect(()=>{
        //APIcall();
        //var Q=getCoinData(query);
        //if(Q!=null){
        //    QueryAPIcall(Q);
        //}
    },[query]);

    const APIcall = async () => {
        const response = await fetch(apiURL);
        const jsonFormat = await response.json();
        setjsonData({coins:jsonFormat});
    };


    const QueryAPIcall = async (url) => {
        const response = await fetch(url);
        
        const data = await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(response);
        console.log(data);
        setjsonData({coins:data});
    };

    const runAPI= ()=>{
        var url=query_part1+query+query_part2;
        QueryAPIcall(url);
    };

    return ( 
        <React.Fragment>
            <input type='text' value={query} onChange={event=>setQuery(event.target.value)}></input>
            <input type='button' onClick={()=>{runAPI()}}/>
            {jsonData.coins.map((item,index)=>{
                if(item.name===query){
                    console.log(item);
                    return <CoinData name={item.name} id={item.id} price={item.price} key={index}/>
                }
                else{
                    return null;
                }
            } )}
        </React.Fragment>
    );
}
 
export default CoinSearch;