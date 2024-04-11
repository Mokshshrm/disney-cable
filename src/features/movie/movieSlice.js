import { createSlice, } from '@reduxjs/toolkit'

const initialState = {
    recommended: null,
    newDisney: null,
    originals: null,
    trending: null,
}
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, actoin) => {
            state.recommended = actoin.payload.recommended,
                state.newDisney = actoin.payload.newDisney
            state.originals = actoin.payload.originals
            state.trending = actoin.payload.trending
        }
    },
})

export const { setMovies } = movieSlice.actions
export const selectRecommended = (state) => state.movie.recommended
export const selectNewDisney = (state) => state.movie.newDisney
export const selectOriginals = (state) => state.movie.originals
export const selectTrending = (state) => state.movie.trending

export default movieSlice.reducer;


