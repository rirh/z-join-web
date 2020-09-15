import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../redux'


const initialState: any = {
    snackBar: {
        open: false,
        message: '',
        type: 'info',
        duration: 3000,
    },
    token: '',
    user: {},
    upload: {
        open: false
    },

};
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updateUploadRes: (_, { payload }) => {
            return {
                upload: payload
            }
        },
        updateMessage: (_, { payload }) => {
            return {
                snackBar: payload
            }
        },
        updateToken: (_, { payload }) => {
            return {
                token: payload
            }
        },
        updateUser: (_, { payload }) => {
            return {
                user: payload
            }
        }
    }
})


export const { updateMessage, updateToken, updateUser, updateUploadRes } = appSlice.actions

export const selectAppSlice = (state: RootState) => state[appSlice.name];

export default appSlice;