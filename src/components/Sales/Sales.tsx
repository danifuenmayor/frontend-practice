import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SalesFormData from "./SalesFormData";
import SalesFormReview from "./SalesFormReview";
import { SALE_PRODUCT, PayloadSales } from "../../reducers/sales/types";
import { Formik, Form, FormikProps } from "formik";
import SaleFormSchema from "./SaleFormSchema";
import { GET_PRODUCT } from "../../reducers/products/types";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const Sales = (props: any) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { productId } = useParams();
  const userState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (userState.accessToken !== "") {
      dispatch({
        type: GET_PRODUCT,
        payload: productId,
      });
    } else {
      props.history.push("/login");
    }
  }, [dispatch, productId, props.history, userState.accessToken]);

  const product = useSelector((state: RootState) => state.products.selected);

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Información de comprador@", "Revisa los datos de tu venta"];

  function getStepContent() {
    switch (activeStep) {
      case 0:
        return <SalesFormData />;
      case 1:
        return <SalesFormReview productId={productId} product={product} />;

      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = (values: any) => {
    dispatch({
      type: SALE_PRODUCT,
      payload: {
        ...values,
        accessToken: userState.accessToken,
        productId: productId,
      },
    });
    handleNext();
  };

  const loading = useSelector((state: RootState) => state.sales.loading);

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            rut: "",
            phone: "",
            address: "",
          }}
          validationSchema={SaleFormSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
          }}
        >
          {(props: FormikProps<Partial<PayloadSales>>) => (
            <Form>
              <Paper className={classes.paper}>
                <Typography
                  color="secondary"
                  component="h1"
                  variant="h4"
                  align="center"
                >
                  Venta de Producto
                </Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <React.Fragment>
                  {activeStep === steps.length ? (
                    loading ? (
                      <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                          Gracias por tu venta
                        </Typography>
                        <Typography variant="subtitle1">
                          Tu número de orden es #2001539. Le enviaremos una
                          actualización de sus ventas cuando el producto o
                          servicio haya sido entregado. Gracias por confiar en
                          Selyt
                        </Typography>
                        <Box mt={5}>
                          <Button
                            variant="outlined"
                            onClick={() => history.push("/user-profile")}
                            color="secondary"
                          >
                            Volver a mi perfil
                          </Button>
                        </Box>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                          No se pudo concretar la venta
                        </Typography>
                        <Typography variant="subtitle1">
                          Ha ocurrido un error al momento de llenar el
                          formulario. Pon atención que todos los campos esten
                          bien ingresado.
                        </Typography>
                        <Box mt={5}>
                          <Button
                            variant="outlined"
                            onClick={() => history.push("/user-profile")}
                            color="secondary"
                          >
                            Volver a mi perfil
                          </Button>
                        </Box>
                      </React.Fragment>
                    )
                  ) : (
                    <React.Fragment>
                      {getStepContent()}
                      <div className={classes.buttons}>
                        {activeStep !== 0 && (
                          <Button
                            onClick={handleBack}
                            className={classes.button}
                          >
                            Volver
                          </Button>
                        )}
                        {activeStep === steps.length - 1 ? (
                          <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            key="button-submit"
                            disabled={!props.isValid}
                            // onClick={handleNext}
                            className={classes.button}
                          >
                            Realizar Venta
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            key="button-next"
                            type="button"
                            color="primary"
                            disabled={!props.isValid}
                            onClick={handleNext}
                            className={classes.button}
                          >
                            Siguiente
                          </Button>
                        )}
                      </div>
                    </React.Fragment>
                  )}
                </React.Fragment>
              </Paper>
            </Form>
          )}
        </Formik>
      </main>
    </React.Fragment>
  );
};

export default Sales;
