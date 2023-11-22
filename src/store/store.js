import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auhtSlice'
import reportsReducer from '../slices/reportsSlice'


export const store = configureStore({
    reducer:{
        auth:authReducer,
        reports:reportsReducer
    }
});