import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from "./reducers/reduser";

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})
