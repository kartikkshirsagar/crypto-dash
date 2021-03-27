import React, { useState } from 'react';
import './coin-data.css';

const CoinData = (props) => {
    const [displayGraph,setdisplayGraph] = useState(false);
    console.log(props);
    console.log(props.name);
    return ( 
        
        <React.Fragment>
        <div className='coin-data'>
            <span>Name:{props.name}</span>
            ,
            <span>Id:{props.id}</span>
            ,
            Price:${props.price}
            <button onClick={()=>setdisplayGraph(displayGraph===true?false:true)} >Display Graph</button>
            { displayGraph===true && <h2>Graph here</h2>}
        </div>
        </React.Fragment>
    );
}
 
export default CoinData;