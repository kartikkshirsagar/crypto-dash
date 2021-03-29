import React, { useState } from 'react';
import Appbar from './app-bar';
import CoinData from './coin-data';
import UseAutocomplete from './autocomplete';
import CoinList from './coin-list';
import RowHeader from './row_header'


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
            <UseAutocomplete currency={currency}/>
            <h2>Some popular currencies:</h2>
            <RowHeader/>
            <CoinList currency={currency}/>

            {/*<CoinSearch/> */}
            
        </div>
    )
}

