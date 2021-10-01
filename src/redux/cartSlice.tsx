import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  count: number;
  totalPrice : number;
}

const initialState: CartState = {
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incremented(state) {
      state.count++;
    },
    decremented(state) {
      state.count--;
    },
  },
});

export const { decremented, incremented } = cartSlice.actions;
export default cartSlice.reducer;