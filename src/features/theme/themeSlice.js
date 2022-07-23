import { createSlice } from '@reduxjs/toolkit'

export const ThemSelice = createSlice({
  name: 'theme',
  initialState: {
    color: ""
  },
  reducers: {
     
    changeTectColor: (state, action) => {
      state.color = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {changeTectColor } = ThemSelice.actions

export default ThemSelice.reducer