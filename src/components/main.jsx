import React, { useState } from 'react';
import Appbar from './app-bar';
import CoinData from './coin-data';
import UseAutocomplete from './autocomplete';
import CoinList from './coin-list';
import RowHeader from './row_header';
import './main.css';


export default function Main() {
   
    const [currency,setCurrency]=useState('INR');


    return (
        <div>
            <Appbar >CryptoDash
                <div className='nav-choice'>
            <label for="currency" >Choose currency:</label>

            <select name="currency" id="currency" onChange={(event)=>{setCurrency(event.target.value)}}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            </select> 
            </div>
            </Appbar>
            <UseAutocomplete currency={currency}/>
            <h2>Some popular currencies:</h2>
            <RowHeader/>
            <CoinList currency={currency}/>

            {/*<CoinSearch/> */}
            
        </div>
    )
}

