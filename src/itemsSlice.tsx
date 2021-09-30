// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ItemState {
  value: number;
}

const initialState: ItemState = {
  value: 100,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    incremented(state) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    // decrement
    // reset
  },
});

export const { incremented, amountAdded } = itemSlice.actions;
export default itemSlice.reducer;