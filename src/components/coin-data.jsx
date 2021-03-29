import React, { useState,useEffect } from "react";
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


  useEffect(() => {

  },[props.currency])

  const [displayGraph, setdisplayGraph] = useState(false);
  //   console.log(props);
  //   console.log(props.name);
  function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

  const renderGraph = () => {
    if (displayGraph === true) {
      return (
        <TableRow>
          <TableCell colSpan={6}>
            <div style={{ height: 450 }}>
              <Graph id={props.item.id} currency={props.currency} />
            </div>
          </TableCell>
        </TableRow>
      );
    }
    return null;
  };
  var assert = require("assert");
  if (props.item["1d"] === undefined) {
    return <h1>No data found</h1>;
  }
  assert(props.item["1d"] !== undefined);
  //Change assert to error handling,display null or something
  const increase_1d = (
    (props.item["1d"].price_change / props.item.price) *
    100
  ).toFixed(2);
  let color;
  if (increase_1d > 0) {
    color = { color: "#00e08e" };
  } else {
    color = { color: "red" };
  }
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow
              key={props.item.id}
              hover="True"
              onClick={() =>
                setdisplayGraph(displayGraph === true ? false : true)
              }
            >
              <TableCell width="16%">{props.item.name}</TableCell>
              <TableCell width="16%">{props.item.symbol}</TableCell>
              <TableCell width="16%">
                <img
                  src={props.item.logo_url}
                  alt="Logo"
                  className="coin-logo"
                />
              </TableCell>
              <TableCell width="16%">
                {thousands_separators(parseInt(props.item.circulating_supply))} {props.item.symbol}
              </TableCell>
              <TableCell align="center" width="16%">
                {props.currency}{" "}
                {props.item.price > 1000 &&
                  (props.item.price / 1000).toFixed(3) + "K"}
                {props.item.price < 1000 && (props.item.price / 1).toFixed(3)}
              </TableCell>

              <TableCell
                align="center"
                className="percent-cell"
                style={color}
                width="16%"
              >
                {increase_1d}%
              </TableCell>
              {/* 
              <TableCell align="right" width='20%'>
                <Button
                  variant="outlined"
                  onClick={() =>
                    setdisplayGraph(displayGraph === true ? false : true)
                  }
                >
                  Display Graph
                </Button>
              </TableCell>
              */}
            </TableRow>
            {renderGraph()}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default CoinData;
