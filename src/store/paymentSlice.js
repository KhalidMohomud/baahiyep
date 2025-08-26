import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: null,
  currency: 'USD',
  meta: null,
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setAmount(state, action) {
      state.amount = action.payload
    },
    setCurrency(state, action) {
      state.currency = action.payload || 'USD'
    },
    setMeta(state, action) {
      state.meta = action.payload || null
    },
    clearPayment(state) {
      state.amount = null
      state.currency = 'USD'
      state.meta = null
    }
  }
})

export const { setAmount, setCurrency, setMeta, clearPayment } = paymentSlice.actions
export default paymentSlice.reducer


