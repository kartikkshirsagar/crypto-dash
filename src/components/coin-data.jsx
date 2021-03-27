import React, { useState } from "react";
import "./coin-data.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Graph from "./graph"

const CoinData = (props) => {
  const [displayGraph, setdisplayGraph] = useState(false);
  console.log(props);
  console.log(props.name);

  const renderGraph = () => {
    if (displayGraph === true) {
      return (
        <TableRow>
          <TableCell colSpan={3}><div style={{height:500}}><Graph /></div></TableCell>
        </TableRow>
      );
    }
    return null;
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow key={props.id}>
              <TableCell width="33%">
                {props.name}
              </TableCell>
              <TableCell align="center" width="33%">{props.price}</TableCell>
              <TableCell align="right" width="33%">
                <button
                  onClick={() =>
                    setdisplayGraph(displayGraph === true ? false : true)
                  }
                >
                  Display Graph
                </button>
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
