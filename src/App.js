import CoinData from './components/coin-data';
import CoinList from './components/coin-list';
import CoinSearch from './components/coin-search';
import './App.css';
import Graph from './components/graph';
import Appbar from './components/app-bar';

function App() {
  return (
    <div className="App">
        <Appbar />
        <CoinList/>

        <CoinSearch/>

    </div>
  );
}

export default App;
