import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/getProducts')
  const data = await response.json()
  return data
})


export interface ProductState {
  products: object[],
  error: any,
}

const initialState: ProductState = {
  products: [],
  error: null,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  },
})

export default productSlice.reducer