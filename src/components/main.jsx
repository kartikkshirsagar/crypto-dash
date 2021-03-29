import React, { useState,useRef } from 'react';
import Appbar from './app-bar';
import CoinData from './coin-data';
import UseAutocomplete from './autocomplete';
import CoinList from './coin-list';


export default function Main() {
   
    const [currency,setCurrency]=useState('INR');


    return (
        <div>
            <Appbar />
            <label for="cars">Choose currency:</label>

            <select name="cars" id="cars" onChange={(event)=>{setCurrency(event.target.value)}}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            </select> 

            <h2>Some popular currencies:</h2>
            <CoinList currency={currency}/>

            {/*<CoinSearch/> */}
            <UseAutocomplete currency={currency}/>
        </div>
    )
}

