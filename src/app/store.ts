import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../action/productSlice'
import loadingReducer from '../action/loading'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import categoriesReducer from '../action/categoriesSlice'
export const store = configureStore({
  reducer: {
    products: productReducer,
    loading: loadingReducer,
    categories: categoriesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector