import {createSlice} from '@reduxjs/toolkit';

export const citySlice= createSlice({
   name: 'city',
   initialState: {cityName:undefined},
   reducers: {
    setCity: (state, action) => {
        state.cityName = action.payload
    }
}
})

export const {setCity} = citySlice.actions;
export default citySlice.reducer
