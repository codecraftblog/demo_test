import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  count: number;
  totalPrice : number;
}

const initialState: CartState = {
  count: 0,
  totalPrice: 0
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
    increaseTotal(state, action: PayloadAction<number>){
      state.totalPrice += action.payload;
    },
    decreaseTotal(state, action: PayloadAction<number>){
      state.totalPrice -= action.payload;
    },
  },
});

export const { decremented, incremented, increaseTotal, decreaseTotal } = cartSlice.actions;
export default cartSlice.reducer;