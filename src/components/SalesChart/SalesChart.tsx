import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Container } from "@material-ui/core";
import SalesChartLine from "./SalesChartLine";
import SalesChartPie from "./SaleChartPie";
import AdminChart from "./SalesChart2y";
import SalesRanking from "./SalesRanking";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 500,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabpanel: {
    width: 1000,
    height: 500,
    justifyContent: "center",
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.tabpanel}
      {...other}
    >
      {value === index && <Container>{children}</Container>}
    </div>
  );
};

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function SalesCharts(props: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Total de ingresos por día" {...a11yProps(0)} />
        <Tab label="Total de ventas por marca" {...a11yProps(1)} />
        <Tab label="Usuari@s con más ventas" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SalesChartLine />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SalesChartPie />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SalesRanking />
      </TabPanel>
    </div>
  );
}
