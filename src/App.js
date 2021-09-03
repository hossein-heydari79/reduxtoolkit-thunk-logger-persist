import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Button from "@material-ui/core/Button";
import { Grid, Tooltip, CircularProgress } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import { incrementAsync, increase, increaseAysnc } from './Redux/count/count.reducer'

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <Grid container justifyContent="center" direction="column" alignItems="center">
        <Grid item>
          {count.loading ? <CircularProgress />
            :
            <Alert severity="success">Counter : {count.count}</Alert>}
        </Grid>


        <Grid item container justifyContent="center" alignItems="center">

          <Grid item style={{ margin: "20px" }}>
            <Tooltip title="increase">
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(increaseAysnc())}
              >
                asynchronous increase
              </Button>
            </Tooltip>

          </Grid>

          <Grid item style={{ margin: "20px" }}>
            <Tooltip title="increase">
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(increase({ count: 10, loading: false }))}
              >
                synchronous increase
              </Button>
            </Tooltip>

          </Grid>

        </Grid>

      </Grid>
    </>
  );
}

export default App;
