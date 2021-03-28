import CoinData from './components/coin-data';
import CoinList from './components/coin-list';
import CoinSearch from './components/coin-search';
import './App.css';
import Graph from './components/graph';
import Appbar from './components/app-bar';
import UseAutocomplete from './components/autocomplete';

function App() {
  return (
    <div className="App">
        <Appbar />
        <CoinList/>

        <CoinSearch/>
        <UseAutocomplete/>

    </div>
  );
}

export default App;
