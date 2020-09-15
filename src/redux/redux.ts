import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import loginSclice from './slices/login'
import homeSlice from 'src/redux/slices/homeSlice'
import appSlice from 'src/redux/slices/appSlice'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

export const api = axios.create({
    baseURL: '/api',
    responseType: 'json'
})

const rootReducer = combineReducers({
    [loginSclice.name]: loginSclice.reducer,
    [homeSlice.name]: homeSlice.reducer,
    [appSlice.name]: appSlice.reducer

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [axiosMiddleware(api),
    ...getDefaultMiddleware({ serializableCheck: false })]
});

export type RootState = ReturnType<typeof rootReducer>