import CoinData from './components/coin-data';
import CoinList from './components/coin-list';
import CoinSearch from './components/coin-search';
import './App.css';

function App() {
  return (
    <div className="App">
        <CoinData name='Bitcoin' id='1' price='1000' />

        <CoinList/>

        <CoinSearch/>

    </div>
  );
}

export default App;
