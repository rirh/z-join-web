import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../redux'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

interface Login {
    Login?: any,
    isLoading?: boolean,
    isSuccess?: boolean,
    error?: any

}

interface AxiosMiddlewareActionMeta {
    previousAction: PayloadAction
}
interface AxiosMiddlewareActionError {
    data: any
    status: number
}

const initialState: Login = {
    Login: '123123',
    isLoading: false,
    isSuccess: false
};
const LoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        request: () => {
            return {
                isLoading: true
            }
        },
        success: {
            reducer: (
                _,
                action: PayloadAction<
                    AxiosResponse,
                    string,
                    AxiosMiddlewareActionMeta,
                    AxiosMiddlewareActionError
                >
            ) => {
                return {
                    Login: action.payload.data
                }
            },
            prepare: (payload, meta, error) => {
                return {
                    payload,
                    meta,
                    error
                }
            }
        },
        fail: {
            reducer: (
                _,
                action: PayloadAction<
                    AxiosResponse,
                    string,
                    AxiosMiddlewareActionMeta,
                    AxiosMiddlewareActionError
                >
            ) => {
                return {
                    error: action.error.data
                }
            },
            prepare: (payload, meta, error) => {
                return {
                    payload,
                    meta,
                    error
                }
            }
        }
    }
})


export const { request, success, fail } = LoginSlice.actions

export const fetchLogin = (payload: AxiosRequestConfig) => (
    dispatch: any
) => {
    dispatch({
        types: [request, success, fail],
        payload: {
            request: payload,
            
        }
    })
}

export const selectLogin = (state: RootState) => state[LoginSlice.name];

export default LoginSlice;