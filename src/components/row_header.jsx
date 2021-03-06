import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);





const RowHeader = () => {
  return (
    <React.Fragment>
      <div className="container mt-5"></div>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell width="16%">Name</StyledTableCell>
              <StyledTableCell width="16%">Symbol</StyledTableCell>
              <StyledTableCell align="left" width="16%">
                LOGO
              </StyledTableCell>
              <StyledTableCell align="left" width="16%">
                Circulating Supply
              </StyledTableCell>
              <StyledTableCell align="center" width="16%">
                Price
              </StyledTableCell>
              <StyledTableCell align="center" width="16%">
                24H change
              </StyledTableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default RowHeader;
