import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../redux'


const initialState: any = {
    currentTab: {}
};
const homeSlice = createSlice({
    name: 'Home',
    initialState,
    reducers: {
        updateCurrentTab: (_, payload) => {
            return {
                currentTab: payload
            }
        }
    }
})


export const { updateCurrentTab } = homeSlice.actions

export const selectHomeSlice = (state: RootState) => state[homeSlice.name];

export default homeSlice;