import React, { useState,useEffect } from 'react';
import CoinData from './coin-data';

//const apiURL="https://api.nomics.com/v1/currencies/ticker?key=7986da46df6f3c84a80abcb10f1f7c73&interval=1d&convert="
//const url2="&per-page=5&page=1";




const apiURL =
  "https://api.nomics.com/v1/currencies/ticker?key=7986da46df6f3c84a80abcb10f1f7c73&interval=1d&convert="
const url2="&sort=rank&per-page=20&page=1";

const CoinList = (props) => {
    const [jsonData,setjsonData] = useState({coins:[]});
    
    useEffect(()=>{
        APIcall();
        // console.log(props.currency);
    },[props]);

    const APIcall = async () => {
        let response;
        do{
            response = await fetch(apiURL+props.currency+url2);
            console.log(response.status+ "coinList");
        }while(response.status==429);
        
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
