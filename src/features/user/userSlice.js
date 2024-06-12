import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
    email: null,
    photo: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogInDetails: (state, action) => {
            state.name = action.payload.displayName;
            state.email = action.payload.email;
            state.photo = action.payload.photoURL;
        },
        setUserLogOutState: (state, action) => {
            state.name = null
            state.email = null
            state.photo = null
        }
    }
})

export const { setUserLogInDetails, setUserLogOutState } = userSlice.actions
export const selectUserName = (state) => state.user.name
export const selectUserEmail = (state) => state.user.email
export const selectUserPhoto = (state) => state.user.photo

export default userSlice.reducer;