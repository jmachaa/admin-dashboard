import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: true },
  reducers: {
    logout: (state) => { state.isAuthenticated = false }
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer