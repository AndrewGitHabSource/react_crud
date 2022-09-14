import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    filter: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsers(state) {
            return state.users;
        },
        addUser(state, user) {
            state.users.push(user);
        },
    },
});

export const { getUsers, addUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
