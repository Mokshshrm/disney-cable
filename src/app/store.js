import { configureStore, getDefaultMiddleware } from '@redux-toolkit';


export default configureStore({
    reducer: {
        
    },
    middleware: getDefaultMiddleware({
        serializeableCheck: false,
    })
})