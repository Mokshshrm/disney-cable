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

export default userSlice;