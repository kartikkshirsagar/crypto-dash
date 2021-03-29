import CoinData from "./components/coin-data";
import CoinList from "./components/coin-list";
import CoinSearch from "./components/coin-search";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import "./App.css";
import Graph from "./components/graph";
import Appbar from "./components/app-bar";
import UseAutocomplete from "./components/autocomplete";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function App(props) {
  return (
    <div className="App">
      <Appbar />
      
      <UseAutocomplete />
      <div className="container mt-5"></div>
      <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell width="25%">Name</StyledTableCell>
            <StyledTableCell align="left" width="25%">LOGO</StyledTableCell>
            <StyledTableCell align="center" width="25%">Price</StyledTableCell>
            <StyledTableCell align="center" width="25%">24H change</StyledTableCell>
          </TableRow>
        </TableHead>
        </Table>
        </TableContainer>
      <CoinList />
      {/*<CoinSearch/> */}
      
    </div>
  );
}

export default App;
