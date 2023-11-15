import { createSlice } from '@reduxjs/toolkit';

const authStates = {
    not_authenticated:'not-authenticated',
    authenticated:'authenticated',
    checking:'checking'
}

const initialState = {
    auth: authStates.not_authenticated,
    token: null,
    displayName:null,
    uid:null,
    photoURL:"",
    errorMessage:null,
    email:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        onLoggin: (state, {payload}) => {
            console.log(payload)
            state.auth = authStates.authenticated;
            state.token = payload.token;
            state.uid = payload.uid;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.email = payload.email;
            state.errorMessage = null;
        },
        onLoggout: (state, action) => {
            state.auth = authStates.not_authenticated;
            state.token = null;
            state.uid = null;
            state.displayName = null;
            state.photoURL = null;
            state.email = null;
            state.errorMessage = action.payload.errorMessage;
        },
        onChecking:(state) => {
            state.auth = authStates.checking;
        }
    }
});

//action creator functions
export const { onLoggin,onLoggout, onChecking } = authSlice.actions;
export default authSlice.reducer;