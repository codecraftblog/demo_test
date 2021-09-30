import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ItemState {
  value: number;
}

const initialState: ItemState = {
  value: 0,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { incremented, amountAdded } = itemSlice.actions;
export default itemSlice.reducer;