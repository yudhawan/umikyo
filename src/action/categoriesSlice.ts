import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCategories = createAsyncThunk('categoris/getCategories', async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/getCategories')
    const data = await response.json()
    return data
})

export interface CategoriesState {
    categories: object[],
    sub: object[]
    error: any,
}

const initialState: CategoriesState = {
    categories: [],
    sub: [],
    error: null,
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload?.categories
            state.sub = action.payload?.sub
        })
    },
})

export default categoriesSlice.reducer