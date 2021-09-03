import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  count: 0,
  loading: false,
}

export const countReducer = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.count += action.payload.count;
      state.loading = action.payload.loading;
    },
  },
})


let num = 0;



export const { increase } = countReducer.actions



export function incrementAsync() {
  return async (dispatch, getState) => {
    const { count } = getState();
    dispatch(increase({ count: +num, loading: true }));
    await axios
      .get("https://fakestoreapi.com/users")
      .then((data) => (num = data.data[0].address.number))
      .catch((e) => {
        console.log(e.message);
      });
    dispatch(increase({ count: +num, loading: false }));
  };
}


export default countReducer.reducer