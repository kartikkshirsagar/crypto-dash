import CoinData from "./components/coin-data";
import CoinList from "./components/coin-list";
import CoinSearch from "./components/coin-search";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import "./App.css";
import Graph from "./components/graph";
import Appbar from "./components/app-bar";
import UseAutocomplete from "./components/autocomplete";
import "bootstrap/dist/css/bootstrap.min.css";
import RowHeader from "./components/row_header";




function App(props) {
  return (
    <div className="App">
      <Appbar />
      <UseAutocomplete />
      <RowHeader />
      <CoinList />
    </div>
  );
}

export default App;
