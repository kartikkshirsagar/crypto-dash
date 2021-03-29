import React, { useState } from 'react';
import Appbar from './app-bar';
import CoinData from './coin-data';
import UseAutocomplete from './autocomplete';
import CoinList from './coin-list';
import RowHeader from './row_header';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Main() {
   
    const [currency,setCurrency]=useState('INR');


    return (
        <div>
            <Appbar >
                <div className='nav-choice mt-4 mb-2'>
            <label for="currency" >Choose currency : </label>

            <select className="form-select ml-2" name="currency" id="currency" onChange={(event)=>{setCurrency(event.target.value)}}>
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

