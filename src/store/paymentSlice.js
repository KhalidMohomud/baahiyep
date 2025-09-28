import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amount: 0,
  meta: {},
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setAmount(state, action) {
      state.amount = action.payload;
    },
    setMeta(state, action) {
      state.meta = action.payload;
    },
  },
});

export const { setAmount, setMeta } = paymentSlice.actions;
export default paymentSlice.reducer;
