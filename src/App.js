import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Button from "@material-ui/core/Button";
import { Grid, Tooltip, CircularProgress } from "@material-ui/core";
import { incrementAsync, increase } from './Redux/count/count.reducer'

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          {count.loading ? (
            <CircularProgress />
          ) : (
            <Tooltip title="Count">
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(incrementAsync())}
              >
                {count.count}
              </Button>
            </Tooltip>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
