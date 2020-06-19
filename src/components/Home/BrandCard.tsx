import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    objectFit: "contain",
    margin: theme.spacing(7),
  },
}));

const BrandCard = (props: any) => {
  const style = useStyles();
  return (
    <Card className={style.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="img"
          image={props.image}
          title="brand"
        />
      </CardActionArea>
    </Card>
  );
};
export default BrandCard;
