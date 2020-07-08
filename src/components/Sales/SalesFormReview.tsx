import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useField } from "formik";

//examples

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const SalesFormReview = (props: any) => {
  const { name } = props;
  const [meta] = useField(name);
  const { value } = meta;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Orden de Venta
      </Typography>
      <List disablePadding>
        {props.product && props.product.item && (
          <div>
            <ListItem
              className={classes.listItem}
              key={props.product.item.name}
            >
              <ListItemText
                primary={props.product.item.name}
                secondary={props.product.item.commission}
              />
              <Typography variant="body2">
                {props.product.item.price}
              </Typography>
            </ListItem>
          </div>
        )}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {props.product.item.price}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Envío
          </Typography>
          <Typography gutterBottom>
            {value.name} {value.lastName}
          </Typography>
          <Typography gutterBottom>{value.address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Detalles del pago
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SalesFormReview;
