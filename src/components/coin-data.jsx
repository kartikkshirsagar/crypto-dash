import React, { useState } from "react";
import "./coin-data.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Graph from "./graph";
import Button from "@material-ui/core/Button";

const CoinData = (props) => {
  const [displayGraph, setdisplayGraph] = useState(false);
  //   console.log(props);
  //   console.log(props.name);

  const renderGraph = () => {
    if (displayGraph === true) {
      return (
        <TableRow>
          <TableCell colSpan={5}>
            <div style={{ height: 500 }}>
              <Graph id={props.item.id} />
            </div>
          </TableCell>
        </TableRow>
      );
    }
    return null;
  };
  var assert = require('assert');
  assert(props.item["1d"]!==undefined);
  const increase_1d = ((props.item["1d"].price_change / props.item.price) * 100).toFixed(2);
  let color;
  if (increase_1d > 0) {
    color = { color: 'green' };
  } else {
    color = {color:'red'};
  }
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow key={props.item.id}>
              <TableCell width="25%">{props.item.name}</TableCell>
              <TableCell align="center" width="25%">
                {props.item.price}
              </TableCell>
              <TableCell align="center" width="25%" className="percent-cell">
                {increase_1d}%
              </TableCell>
              <TableCell align="right" width="25%">
                <Button
                  variant="outlined"
                  onClick={() =>
                    setdisplayGraph(displayGraph === true ? false : true)
                  }
                >
                  Display Graph
                </Button>
              </TableCell>
            </TableRow>
            {renderGraph()}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default CoinData;
