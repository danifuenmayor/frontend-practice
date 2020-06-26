import React, { useEffect } from "react";
import { useParams, Redirect, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import Imagedefault from "../images/default.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CircularProgress } from "@material-ui/core";
import { GET_SALES } from "../../reducers/sales/types";
import TextInput from "../TextInput/TextInput";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function capitalizeFirstLetter(string: any) {
  return string[0].toUpperCase() + string.slice(1);
}

const SalesRanking = (props: any) => {
  const location = useLocation();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const sales = useSelector((state: RootState) => state.sales.sales);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

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
        data[element.userId.id].amount += element.productId.price;
      } else {
        data[element.userId.id] = {
          name: element.userId.name,
          lastName: element.userId.lastName,
          mail: element.userId.email,
          totalSales: 1,
          amount: element.productId.price,
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
