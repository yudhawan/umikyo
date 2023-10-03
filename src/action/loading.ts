import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export interface LoadingState {
    loading: boolean,
}

const initialState: LoadingState = {
    loading: false
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },

})
export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer