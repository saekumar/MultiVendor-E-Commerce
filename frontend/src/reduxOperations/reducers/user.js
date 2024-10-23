import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LoadUserRequest: (state) => {
      state.loading = true
    },
    LoadUserSuccess: (state, action) => {
      state.isAuthenticated = true
      state.loading = false
      state.user = action.payload
    },
    LoadUserFail: (state, action) => {
      state.isAuthenticated = false
      state.loading = false
      state.error = action.payload
    },
    ClearErrors: (state, action) => {
      state.error = false
    },
  },
})

export const { LoadUserRequest, LoadUserSuccess, LoadUserFail, ClearErrors } =
  userSlice.actions
export default userSlice.reducer
