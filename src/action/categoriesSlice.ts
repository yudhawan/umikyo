import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCategories = createAsyncThunk('categoris/getCategories', async () => {
    const response = await fetch(process.env.BASE_URL + '/category')
    const data = await response.json()
    return data
})

export interface CategoriesState {
    categories: object[]
    error: any,
}

const initialState: CategoriesState = {
    categories: [],
    error: null,
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })
    },
})

export default categoriesSlice.reducer