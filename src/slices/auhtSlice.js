import { createSlice } from '@reduxjs/toolkit';
import { authStates } from '../helpers/enums';


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
            state.auth = authStates.authenticated;
            state.token = payload.token;
            state.uid = payload.uid;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.email = payload.email;
            state.errorMessage = null;
        },
        onLoggout: (state) => {
            state.auth = authStates.not_authenticated;
            state.token = null;
            state.uid = null;
            state.displayName = null;
            state.photoURL = null;
            state.email = null;
            state.errorMessage = null
            localStorage.clear()
        },
        onChecking:(state) => {
            state.auth = authStates.checking;
        }
    }
});

//action creator functions
export const { onLoggin,onLoggout, onChecking } = authSlice.actions;
export default authSlice.reducer;