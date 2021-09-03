import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  count: 0,
  loading: false,
}

let num = 0;


export const increaseAysnc = createAsyncThunk(
  "team/playerListLoading",
  async () => {
    await axios
      .get("https://fakestoreapi.com/users")
      .then((data) => (num = data.data[0].address.number))
      .catch((e) => {
        console.log(e.message);
      });
  }
);

export const countReducer = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.count += action.payload.count;
      state.loading = action.payload.loading;
    }
  },

  extraReducers: {
    [increaseAysnc.pending]: (state) => {
      state.loading = true;
    },
    [increaseAysnc.fulfilled]: (state) => {
      state.loading = false;
      state.count += num;
    },
    [increaseAysnc.rejected]: (state) => {
      state.loading = true;
    },
  }

})

export const { increase } = countReducer.actions;
export default countReducer.reducer