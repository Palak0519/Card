import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import logo from "./Internshala_company_logo.png";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 100
  },
  grid_1: {
    paddingTop: "15px !important",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    cursor: "pointer !important"
  },
  grid_2: {
    color: "rgba(0, 0, 0, 0.54)"
  },
  divider: {
    marginTop: "10px !important",
    marginBottom: "5px !important"
  },
  grid_3: {
    paddingLeft: "5px !important",
    paddingRight: "5px !important"
  },
  logo: {
    marginTop: "10px !important",
    maxWidth: "100px !important",
    maxHeight: "45px !important"
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid className={classes.grid_1} container spacing={0}>
        <Grid container item xs={8} direction="column">
          <Typography color="inherit" variant="h5">
            Online Trainings Content Management
          </Typography>
          <Typography color="inherit" variant="h6">
            Internshala
          </Typography>
        </Grid>{" "}
        <Grid container item xs={4}>
          <img className={classes.logo} src={logo} alt={logo} />
        </Grid>
        <Grid container item xs={4}></Grid>
        <Grid container item xs={12} direction="column">
          <Typography className={classes.grid_2} variant="h6">
            Location: Gurgaon
          </Typography>
          <Typography className={classes.grid_2} variant="h6">
            Stipend: 20000 /Month
          </Typography>
        </Grid>
      </Grid>

      <Grid className={classes.grid_1} container spacing={0}>
        <Grid container item xs={7}>
          <Typography style={{ fontWeight: "500" }} variant="body2">
            Start Date: 20 Aug 2020
          </Typography>
        </Grid>
        <Grid container item xs={5}>
          <Typography style={{ fontWeight: "500" }} variant="body2">
            Duration: 2 months
          </Typography>
        </Grid>
        <Grid container item xs={7}>
          <Typography style={{ fontWeight: "500" }} variant="body2">
            Posted On: 10 Dec'19
          </Typography>
        </Grid>
        <Grid container item xs={5}>
          <Typography style={{ fontWeight: "500" }} variant="body2">
            Apply By: 24 Dec'19
          </Typography>
        </Grid>
      </Grid>

      <Divider className={classes.divider} light />
      <Grid className={classes.grid_3} container spacing={0}>
        <Grid container item xs={6}>
          <Button fullWidth={true} size="large">
            <Icon>remove_red_eye</Icon>
            &nbsp; View
          </Button>
        </Grid>
        <Grid container item xs={6}>
          <Button fullWidth={true} size="large">
            <Icon>share</Icon>
            &nbsp; Share
          </Button>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: 5 }} light />
    </Card>
  );
}
