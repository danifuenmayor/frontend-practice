import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CircularProgress, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SalesRanking = (props: any) => {
  // const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const sales = useSelector((state: RootState) => state.sales.sales);
  

  if (sales?.loading) {
    return <CircularProgress color="secondary" />;
  }

  if (sales?.error) {
    return <h1>{sales.error}</h1>;
  }
  // Function to sort array of objects
  function compareValues(key: any, order = "asc") {
    return function innerSort(a: any, b: any) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }
  // Worked Data from the request to be used in the table
  const usersData = () => {
    let data: any = {};
    sales.forEach((element: any) => {
      if (data.hasOwnProperty(element.userId.id)) {
        data[element.userId.id].totalSales += 1;
        data[element.userId.id].amount += element.productId ? element.productId?.price : 0;
      } else {
        data[element.userId.id] = {
          name: element.userId.name,
          lastName: element.userId.lastName,
          mail: element.userId.email,
          totalSales: 1,
          amount: element.productId ? element.productId?.price : 0,
        };
      }
    });
    return Object.values(data).sort(compareValues("totalSales", "desc"));
  };

  // Data variable with the arrays of objects sorted and ready to be used in the table
  const rows = usersData();

  return (
    // Table format in material UI
    <TableContainer component={Paper}>
      <Typography variant="h6" id="tableTitle" component="div">
        Ranking
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Mail</TableCell>
            <TableCell align="right">Ventas</TableCell>
            <TableCell align="right">Dinero</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow key={row.mail}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.mail}</TableCell>
              <TableCell align="right">{row.totalSales}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesRanking;
