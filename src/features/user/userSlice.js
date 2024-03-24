import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
    email: null,
    photo: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducer: {
        setUserLogInDetails: (state, action) => {
            console.log(action)
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setUserLogOutState: (state, action) => {
            state.name = null
            state.email = null
            state.photo = null
        }
    }
})

export const { setUserLogInDetails, setUserLogOutState } = userSlice.actions;
export const selectUserName = (state) => (state.name)
export const selectUserEmail = (state) => (state.email)
export const selectUserPhoto = (state) => (state.photo)

export default userSlice.reducer;