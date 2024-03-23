import { createSlice } from 'redux-toolkit'

const initialState = {
    name: "",
    email: "",
    photo: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducer: {
        setUserLoginDetails: (state, action) => {
            state.name = action.value.name;
            state.email = action.value.email;
            state.photo = action.value.photo
        },
        setUserLogOutState: (state) => {
            state.name = null
            state.email = null
            state.photo = null

        }
    }
})

export const { setUserLoginDetails, setUserLogOutState } = userSlice.actions;
export const selectUserName = state => state.name
export const selectUserEmail = state => state.email
export const selectUserPhoto = state => state.photo


export default userSlice;