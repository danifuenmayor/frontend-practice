import React, { useEffect } from "react";
import { useParams, Redirect, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import Imagedefault from "../images/default.jpg";
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useRadioGroup,
} from "@material-ui/core";
import { GET_SALES } from "../../reducers/sales/types";
import TextInput from "../TextInput/TextInput";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 600,
    margin: "auto",
    marginTop: 25,
  },
  title: {
    fontSize: 20,
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

  let data: any = {};

  sales.forEach((element: any) => {
    if (data.hasOwnProperty(element.userId)) {
      data[element.userId].totalSales += 1;
      data[element.userId].amount += element.productId.price;
    } else {
      data[element.userId] = {
        totalSales: 1,
        amount: element.productId.price,
      };
    }
  });

  console.log(data);
  return <h1>hola</h1>;
};

export default SalesRanking;
